import * as THREE from "three";

const HEAD_BONE_NAME = "spine006";

/* Spectacles: thin black frame, transparent lenses, slight reflection */
const FRAME_COLOR = 0x1a1a1a;

/* Beard: short, minimal, dark (#222 / #333), jawline only, no lips/cheeks */
const BEARD_COLOR = 0x222222;
const BEARD_COLOR_LIGHT = 0x333333;

/**
 * Create modern spectacles: thin black frame, transparent lenses, slight reflection.
 * Attached to head bone so they move with the character.
 */
function createSpectacles(): THREE.Group {
  const group = new THREE.Group();
  group.name = "spectacles";

  const frameMaterial = new THREE.MeshPhysicalMaterial({
    color: FRAME_COLOR,
    metalness: 0.4,
    roughness: 0.45,
    envMapIntensity: 0.9,
  });

  const lensMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.15,
    metalness: 0.35,
    roughness: 0.05,
    envMapIntensity: 1.2,
    clearcoat: 0.4,
    clearcoatRoughness: 0.1,
  });

  const lensRadius = 0.065;
  const frameThickness = 0.005;
  const bridgeWidth = 0.038;

  const leftLensFrame = new THREE.Mesh(
    new THREE.TorusGeometry(lensRadius, frameThickness, 8, 24),
    frameMaterial
  );
  leftLensFrame.position.set(-lensRadius - bridgeWidth / 2, 0, 0);
  leftLensFrame.rotation.y = Math.PI / 2;
  group.add(leftLensFrame);

  const rightLensFrame = new THREE.Mesh(
    new THREE.TorusGeometry(lensRadius, frameThickness, 8, 24),
    frameMaterial
  );
  rightLensFrame.position.set(lensRadius + bridgeWidth / 2, 0, 0);
  rightLensFrame.rotation.y = Math.PI / 2;
  group.add(rightLensFrame);

  const bridge = new THREE.Mesh(
    new THREE.BoxGeometry(bridgeWidth, frameThickness * 1.2, frameThickness * 1.5),
    frameMaterial
  );
  bridge.position.set(0, 0.002, 0);
  group.add(bridge);

  const lensGeometry = new THREE.CircleGeometry(lensRadius - frameThickness, 24);
  const leftLens = new THREE.Mesh(lensGeometry, lensMaterial);
  leftLens.position.set(-lensRadius - bridgeWidth / 2, 0, frameThickness);
  leftLens.rotation.y = Math.PI / 2;
  group.add(leftLens);

  const rightLens = new THREE.Mesh(lensGeometry.clone(), lensMaterial);
  rightLens.position.set(lensRadius + bridgeWidth / 2, 0, frameThickness);
  rightLens.rotation.y = Math.PI / 2;
  group.add(rightLens);

  group.position.set(0, 0.015, 0.118);
  group.rotation.x = -0.04;
  group.scale.setScalar(1.18);

  return group;
}

/**
 * Create a small, minimal beard: dark (#222/#333), follows jawline only.
 * Does not cover lips or cheeks; subtle and professional.
 */
function createBeard(): THREE.Group {
  const group = new THREE.Group();
  group.name = "beard";

  const beardMaterial = new THREE.MeshPhysicalMaterial({
    color: BEARD_COLOR,
    metalness: 0.02,
    roughness: 0.95,
  });

  const beardMaterialLight = new THREE.MeshPhysicalMaterial({
    color: BEARD_COLOR_LIGHT,
    metalness: 0.02,
    roughness: 0.95,
  });

  const w = 0.058;
  const h = 0.038;
  const chinShape = new THREE.Shape();
  chinShape.moveTo(-w, 0);
  chinShape.lineTo(-w * 0.75, -h * 0.4);
  chinShape.lineTo(-w * 0.35, -h);
  chinShape.lineTo(0, -h * 0.95);
  chinShape.lineTo(w * 0.35, -h);
  chinShape.lineTo(w * 0.75, -h * 0.4);
  chinShape.lineTo(w, 0);
  chinShape.lineTo(-w, 0);

  const chinGeometry = new THREE.ShapeGeometry(chinShape);
  const chinBeard = new THREE.Mesh(chinGeometry, beardMaterial);
  chinBeard.position.set(0, -0.082, 0.078);
  chinBeard.rotation.x = 0.2;
  group.add(chinBeard);

  const chinBack = new THREE.Mesh(chinGeometry.clone(), beardMaterialLight);
  chinBack.position.set(0, -0.08, 0.06);
  chinBack.rotation.x = 0.2;
  group.add(chinBack);

  group.scale.setScalar(1.05);

  return group;
}

/**
 * Add beard and spectacles to the character, attached to the head bone.
 */
export function addCharacterAccessories(character: THREE.Object3D): void {
  const headBone = character.getObjectByName(HEAD_BONE_NAME);
  if (!headBone) return;

  const spectacles = createSpectacles();
  const beard = createBeard();

  spectacles.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      (child as THREE.Mesh).castShadow = true;
      (child as THREE.Mesh).receiveShadow = true;
    }
  });
  beard.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      (child as THREE.Mesh).castShadow = true;
      (child as THREE.Mesh).receiveShadow = true;
    }
  });

  headBone.add(spectacles);
  headBone.add(beard);
}
