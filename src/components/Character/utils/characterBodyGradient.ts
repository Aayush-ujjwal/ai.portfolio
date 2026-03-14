import * as THREE from "three";

const UPPER_BODY_COLOR = new THREE.Color(0xc41e3a);
const LOWER_BODY_COLOR = new THREE.Color(0x0047ab);
const BLEND_ZONE_RATIO = 0.18;

/** Do NOT color head/face: only apply gradient below this height ratio (0 = feet, 1 = top). */
const HEAD_ZONE_TOP_RATIO = 0.72;

const EXCLUDED_NAMES = [
  "screenlight",
  "screen",
  "monitor",
  "desk",
  "keyboard",
  "chair",
  "table",
  "lamp",
  "spectacles",
  "beard",
  "head",
  "face",
  "eye",
  "ear",
  "hair",
  "nose",
  "mouth",
  "laptoplogo",
];

function shouldExcludeMesh(mesh: THREE.Mesh): boolean {
  let obj: THREE.Object3D | null = mesh;
  while (obj) {
    const name = obj.name?.toLowerCase() ?? "";
    if (EXCLUDED_NAMES.some((ex) => name.includes(ex))) return true;
    obj = obj.parent;
  }
  return false;
}

/**
 * Apply red (upper body) to blue (lower body) gradient by modifying mesh materials.
 * Excludes desk, monitor, keyboard, etc. Smooth blend around waist.
 */
export function applyBodyGradient(character: THREE.Object3D): void {
  character.updateWorldMatrix(true, true);

  const meshes: THREE.Mesh[] = [];
  character.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      if (!shouldExcludeMesh(mesh)) meshes.push(mesh);
    }
  });

  if (meshes.length === 0) return;

  const box = new THREE.Box3();
  meshes.forEach((m) => {
    m.updateWorldMatrix(true, true);
    if (m.geometry?.boundingBox) {
      m.geometry.computeBoundingBox();
      const b = m.geometry.boundingBox.clone();
      b.applyMatrix4(m.matrixWorld);
      box.union(b);
    }
  });

  const minY = box.min.y;
  const maxY = box.max.y;
  const height = maxY - minY;
  const headZoneTopY = minY + height * HEAD_ZONE_TOP_RATIO;
  const waistY = minY + height * 0.48;
  const blendHalf = (height * BLEND_ZONE_RATIO) / 2;
  const waistTop = waistY + blendHalf;
  const waistBottom = waistY - blendHalf;

  const tempBox = new THREE.Box3();
  const tempPos = new THREE.Vector3();

  meshes.forEach((mesh) => {
    if (!mesh.geometry) return;
    mesh.geometry.computeBoundingBox();
    tempBox.copy(mesh.geometry.boundingBox!);
    tempBox.applyMatrix4(mesh.matrixWorld);
    tempPos.set(0, 0, 0);
    tempBox.getCenter(tempPos);
    const centerY = tempPos.y;

    if (centerY > headZoneTopY) return;

    let color: THREE.Color;
    if (centerY >= waistTop) {
      color = UPPER_BODY_COLOR.clone();
    } else if (centerY <= waistBottom) {
      color = LOWER_BODY_COLOR.clone();
    } else {
      const t = (centerY - waistBottom) / (waistTop - waistBottom);
      color = UPPER_BODY_COLOR.clone().lerp(LOWER_BODY_COLOR, t);
    }

    const currentMat = mesh.material;
    const materials = Array.isArray(currentMat) ? currentMat : [currentMat];
    const newMaterials: THREE.Material[] = [];

    materials.forEach((mat) => {
      const m = mat as THREE.MeshPhysicalMaterial;
      if (!m?.isMaterial) return;
      const next = m.clone
        ? (m.clone() as THREE.MeshPhysicalMaterial)
        : new THREE.MeshPhysicalMaterial({ color: color.getHex() });
      next.color.copy(color);
      if (typeof m.metalness === "number") next.metalness = m.metalness;
      if (typeof m.roughness === "number") next.roughness = m.roughness;
      if (typeof m.envMapIntensity === "number") next.envMapIntensity = m.envMapIntensity;
      newMaterials.push(next);
    });

    mesh.material = Array.isArray(mesh.material) ? newMaterials : newMaterials[0];
  });
}
