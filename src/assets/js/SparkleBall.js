import * as THREE from 'three'
import TWEEN from 'tween.js'

var camera, scene, renderer;
var mesh;

export default class SparkleBall {
    init() {
        //
        camera = new THREE.PerspectiveCamera( 27, window.innerWidth / window.innerHeight, 1, 3500 );
        camera.position.z = 2000;
        scene = new THREE.Scene();
        scene.background = new THREE.Color( 0xffffff );
        scene.fog = new THREE.Fog( 0x44ff44, 2000, 3500 );

        var light1 = new THREE.DirectionalLight( 0xffffff, 0.5 );
        light1.position.set( 1, 1, 1 );
        scene.add( light1 );

        var light2 = new THREE.DirectionalLight( 0xffffff, 1.5 );
        light2.position.set( 0, -1, 0 );
        scene.add( light2 );
        //
        var triangles = 160000;

        var geometry = new THREE.BufferGeometry();

        var positions = new Float32Array( triangles * 3 * 3 );
        var normals = new Float32Array( triangles * 3 * 3 );
        var colors = new Float32Array( triangles * 3 * 3 );
        var color = new THREE.Color();

        var n = 800, n2 = n/2;  // triangles spread in the cube
        var d = 12, d2 = d/2;   // individual triangle size

        var pA = new THREE.Vector3();
        var pB = new THREE.Vector3();
        var pC = new THREE.Vector3();

        var cb = new THREE.Vector3();
        var ab = new THREE.Vector3();

        for ( var i = 0; i < positions.length; i += 9 ) {
            let x, y, z, v
            do {
                // positions
                x = Math.random() * n - n2;
                y = Math.random() * n - n2;
                z = Math.random() * n - n2;
                v = new THREE.Vector3( x, y, z )

            } while( v.distanceTo(new THREE.Vector3( 0, 0, 0)) > n/2 )

            var ax = x + Math.random() * d - d2;
            var ay = y + Math.random() * d - d2;
            var az = z + Math.random() * d - d2;

            var bx = x + Math.random() * d - d2;
            var by = y + Math.random() * d - d2;
            var bz = z + Math.random() * d - d2;

            var cx = x + Math.random() * d - d2;
            var cy = y + Math.random() * d - d2;
            var cz = z + Math.random() * d - d2;

            positions[ i ]     = ax;
            positions[ i + 1 ] = ay;
            positions[ i + 2 ] = az;
            positions[ i + 3 ] = bx;
            positions[ i + 4 ] = by;
            positions[ i + 5 ] = bz;
            positions[ i + 6 ] = cx;
            positions[ i + 7 ] = cy;
            positions[ i + 8 ] = cz;
            // flat face normals
            pA.set( ax, ay, az );
            pB.set( bx, by, bz );
            pC.set( cx, cy, cz );

            cb.subVectors( pC, pB );
            ab.subVectors( pA, pB );

            cb.cross( ab );
            cb.normalize();

            var nx = cb.x;
            var ny = cb.y;
            var nz = cb.z;

            normals[ i ]     = nx;
            normals[ i + 1 ] = ny;
            normals[ i + 2 ] = nz;
            normals[ i + 3 ] = nx;
            normals[ i + 4 ] = ny;
            normals[ i + 5 ] = nz;
            normals[ i + 6 ] = nx;
            normals[ i + 7 ] = ny;
            normals[ i + 8 ] = nz;

            // colors
            var vx = ( x / n ) + 0.5;
            var vy = ( y / n ) + 0.5;
            var vz = ( z / n ) + 0.5;

            // color.setRGB( vx, vy, vz );
            color.setRGB( 0.3, 1, 3 );

            colors[ i ]     = color.r;
            colors[ i + 1 ] = color.g;
            colors[ i + 2 ] = color.b;
            colors[ i + 3 ] = color.r;
            colors[ i + 4 ] = color.g;
            colors[ i + 5 ] = color.b;
            colors[ i + 6 ] = color.r;
            colors[ i + 7 ] = color.g;
            colors[ i + 8 ] = color.b;
        }

        function disposeArray() { this.array = null; }

        geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ).onUpload( disposeArray ) );
        geometry.addAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ).onUpload( disposeArray ) );
        geometry.addAttribute( 'color', new THREE.BufferAttribute( colors, 3 ).onUpload( disposeArray ) );
        geometry.computeBoundingSphere();

        var material = new THREE.MeshPhongMaterial( {
            color: 0xffffff, specular: 0xffffff, shininess: 250,
            side: THREE.DoubleSide, vertexColors: THREE.VertexColors
        } );

        mesh = new THREE.Mesh( geometry, material );

        scene.add( mesh );
        //
        renderer = new THREE.WebGLRenderer( { antialias: false } );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.gammaInput = true;
        renderer.gammaOutput = true;
        //
        document.getElementById('home-canvas-wrap').appendChild( renderer.domElement );
        //
        window.addEventListener( 'resize', onWindowResize, false );
        document.getElementById('home-canvas-wrap').addEventListener( 'mousemove', onMouseMove, false)

        animate()
    }


}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );

}

function onMouseMove(e) {

    let center = { x: window.innerWidth/2, y: window.innerHeight/2 }
    let xPos = e.clientX
    let yPos = e.clientY

    mesh.rotation.y = ((xPos - center.x)/center.x) * 0.07
    mesh.rotation.x = ((yPos - center.y)/center.y) * 0.07

}

//
function animate() {
    // requestAnimationFrame( animate );
    render();
}

function render() {

    // var time = Date.now() * 0.001;
    // mesh.rotation.x = time * 0.025;
    // mesh.rotation.y = time * 0.05;
    renderer.render( scene, camera );
}