import * as THREE from "three";

const LOGO_NAMES = ["monitor", "laptop", "screen", "display", "lid", "backpanel"];

function findLaptopOrMonitorRoot(obj: THREE.Object3D): THREE.Object3D | null {
  const name = obj.name?.toLowerCase() ?? "";
  if (name === "screenlight") return null;
  if (LOGO_NAMES.some((n) => name.includes(n))) return obj;
  for (const child of obj.children) {
    const found = findLaptopOrMonitorRoot(child);
    if (found) return found;
  }
  return null;
}

function findLaptopBack(obj: THREE.Object3D): THREE.Object3D | null {
  const byName = findLaptopOrMonitorRoot(obj);
  if (byName) return byName;
  const screenLight = obj.getObjectByName("screenlight");
  if (screenLight?.parent) return screenLight.parent;
  return null;
}

/**
 * Add a small Apple-style white glowing logo on the back of the laptop screen.
 * Centered, subtle emissive material.
 */
export function addLaptopLogo(character: THREE.Object3D): void {
  const laptopBack = findLaptopBack(character);
  if (!laptopBack) return;

  const logoGroup = new THREE.Group();
  logoGroup.name = "laptopLogo";

  const radius = 0.045;
  const logoGeometry = new THREE.CircleGeometry(radius, 32);
  const logoMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    emissive: 0xffffff,
    emissiveIntensity: 0.35,
    transparent: true,
    opacity: 0.92,
    roughness: 0.2,
    metalness: 0.1,
  });
  const logoMesh = new THREE.Mesh(logoGeometry, logoMaterial);
  logoMesh.renderOrder = 1;
  logoGroup.add(logoMesh);

  logoGroup.position.set(0, 0, -0.2);
  logoGroup.rotation.x = Math.PI / 2;
  logoGroup.scale.setScalar(1);

  laptopBack.add(logoGroup);
}
