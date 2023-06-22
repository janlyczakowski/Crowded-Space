import { useThree } from '@react-three/fiber';
import { AxesHelper } from 'three';
import { CubeTextureLoader } from 'three';
import right from '../resources/Stars/skybox/right.png';
import left from '../resources/Stars/skybox/left.png';
import top from '../resources/Stars/skybox/top.png';
import bottom from '../resources/Stars/skybox/bottom.png';
import front from '../resources/Stars/skybox/front.png';
import back from '../resources/Stars/skybox/back.png';

function SkyBox() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();

  const texture = loader.load([right, left, top, bottom, front, back]);
  // const axesHelper = new AxesHelper(5);
  scene.background = texture;
  // scene.add(axesHelper);
  return null;
}

export default SkyBox;
