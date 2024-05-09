
document.addEventListener("DOMContentLoaded", () => {
    const scene = new three.Scene();
    
    const geometry = new three.BoxGeometry(1, 1, 1);
    const material = new three.MeshBasicMaterial({color: "FF0000"}); 
    const cube = new three.Mesh(geometry, material);

    scene.add(cube);
    cube.position.set(0, 0, -2);
    cube.rotation.set(0, Math.PI/4, 0);

    const camera = new three.PerspectiveCamera();
    camera.position.set(1, 1, 5);

    const renderer = new three.WebGLRenderer();
    renderer.setSize(500, 500); 
    renderer.render(scene, camera);

    document.body.appendChild(renderer.domElement);
    });