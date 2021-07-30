import{a as e,b as o,g as n,m as t,h as s}from"./htmlAddition.c259bfb9.js";import{T as l,R as a,M as i,P as c,a as d,G as r,b as p,S as w,c as m,d as f,W as h,O as g,e as b,V as v,A as S,B as u}from"./vendor.89b462a9.js";const y=document.querySelector("#bg"),I=new m,P=new f(75,window.innerWidth/window.innerHeight,.1,30),M=new h({canvas:y}),k=1.8;Math.PI;let _,T=new i(new g(1),new b({color:3225597,wireframe:!0}));(async()=>{e(),document.getElementById("loading").style.display="none",document.getElementById("app").style.display="block",M.setPixelRatio(window.devicePixelRatio),M.setSize(window.innerWidth,window.innerHeight),M.render(I,P),P.position.set(0,k,-5),P.lookAt(new v(0,k,0));const s=(new l).load("/nbg.jpg");s.repeat,I.background=s;const m=new S(16777215);m.intensity=.5,I.add(m),function(e){const o=(new l).load("/planet/planet.jpg");o.wrapS=a,o.wrapT=a,o.offset.set(0,0),o.repeat.set(70,70);const n=(new l).load("/planet/NormalMap.png");n.wrapS=a,n.wrapT=a,n.offset.set(0,0),n.repeat.set(70,70);const t=(new l).load("/planet/DisplacementMap.png");t.wrapS=a,t.wrapT=a,t.offset.set(0,0),t.repeat.set(70,70);const s=(new l).load("/planet/AmbientOcclusionMap.png");s.wrapS=a,s.wrapT=a,s.offset.set(0,0),s.repeat.set(70,70);const r=new i(new c(1e3,1e3,10,10),new d({map:o,aoMap:s,normalMap:n,displacementMap:t,displacementScale:1}));r.rotation.x-=Math.PI/2,e.add(r);const p=(new l).load("/planet/farm.jpg");p.wrapS=a,p.wrapT=a,p.offset.set(0,0),p.repeat.set(4,1);const w=new i(new c(100,19,10,10),new d({map:p}));w.rotation.x-=Math.PI/2,w.position.set(0,.1,46),e.add(w)}(I),function(e){const o=new r;function n(){const o=new w(.1,24,24),n=new d({color:16777215}),t=new i(o,n),[s,l,a]=[p.randFloat(-20,20),p.randFloat(0,50),p.randFloat(0,200)];t.position.set(s,l,a),e.add(t)}function t(o,n){const[t,s]=[p.randFloat(-30,30),p.randFloat(0,200)];o.position.set(t,n||0,s),e.add(o)}o.load("/models/falltree/model.gltf",(e=>{const o=e.scene;o.scale.setScalar(1),o.position.set(0,3,22),o.children[2].visible=!1;let n=0;for(;n<6;)t(o.clone(),3),n++})),o.load("/models/bouldar/boulder_03.gltf",(e=>{const o=e.scene;o.scale.setScalar(.01),o.position.set(0,0,22),o.children[2].visible=!1,o.rotation.y+=Math.PI/2,o.children[2].visible=!1;let n=0;for(;n<3;)t(o.clone(),0),n++})),o.load("/models/cactus/PipeOrganCactus.gltf",(e=>{const o=e.scene;o.scale.setScalar(.3),o.position.set(0,0,22),o.children[2].visible=!1;let n=0;for(;n<7;)t(o.clone(),0),n++})),o.load("/models/beanstalk/PUSHILIN_Beanstalk.gltf",(e=>{const o=e.scene;o.scale.setScalar(1),o.position.set(0,0,22),o.children[2].visible=!1;let n=0;for(;n<7;)t(o.clone(),0),n++})),o.load("/models/bamboo/PUSHILIN_bamboo.gltf",(e=>{const o=e.scene;o.children[2].visible=!1;let n=0;for(;n<7;)t(o.clone(),1),n++})),o.load("/models/weepwillow/WeepingWillowTree.gltf",(e=>{const o=e.scene.children[0];o.scale.setScalar(.5);let n=0;for(;n<6;)t(o.clone()),n++}));for(let s=0;s<500;s++)n()}(I),T.position.y+=3,T.position.z=2;const f=(new l).load("/my.jpg");_=new i(new u(1.5,1.5,1.5),new b({map:f})),_.position.set(-3,1.5,12),I.add(_);let h=16;I.add(T);const g=new r;!function(e){const o=new r;o.load("/models/buld/Bulldozer.gltf",(o=>{const n=o.scene;n.scale.setScalar(.3),n.position.set(-4,.1,22),n.children[2].visible=!1,n.rotateY(3*Math.PI/4),e.add(n)})),o.load("/models/dumbtruck/Dump_Truck_01.gltf",(o=>{const n=o.scene;n.children[2].visible=!1,n.scale.setScalar(.3),n.position.set(7,.1,29),n.rotateY(3*Math.PI/4),e.add(n)}),void 0,console.log),o.load("/models/cabin/Cabin 2.gltf",(o=>{const n=o.scene;n.scale.setScalar(.01),n.children[2].visible=!1,n.position.set(-15,0,35),n.rotateY(3*Math.PI/4),e.add(n)}),void 0,console.log),o.load("/models/woodpile/model.gltf",(o=>{const n=o.scene;n.scale.setScalar(4),n.position.set(7,-5,22),n.rotateY(3*Math.PI/4),e.add(n)}),void 0,console.log),o.load("/models/silo/PUSHILIN_silo.gltf",(o=>{const n=o.scene;n.children[2].visible=!1,n.scale.setScalar(5),n.position.set(14,5,50),e.add(n)}),void 0,console.log),o.load("/models/windm/PUSHILIN_windmill.gltf",(o=>{const n=o.scene;n.scale.setScalar(5),n.children[2].visible=!1,n.position.set(-13,5,45),e.add(n)}),void 0,console.log),o.load("/models/wheat/FieldOfWheat.gltf",(o=>{const n=o.scene.children[0].children[0].children[0];n.scale.setScalar(.1);let t=37;for(;t<56;t+=2)for(let o=-20;o<20;o+=2){const s=n.clone();s.position.set(o,0,t),e.add(s)}}),void 0,console.log),o.load("/models/skysc/PUSHILIN_skyscraper.gltf",(o=>{const n=o.scene;n.scale.set(4,3,4),n.children[2].visible=!1,n.position.set(4,6,64),n.rotateY(Math.PI),e.add(n)}),void 0,console.log),o.load("/models/skysc2/model.gltf",(o=>{const n=o.scene;n.scale.set(7,5,7),n.children[2].visible=!1,n.position.set(-8,-4,62),e.add(n)}),void 0,console.log),o.load("/models/skyscs/Skycraper_173.gltf",(o=>{const n=o.scene;n.scale.setScalar(.05),n.position.set(15,0,65),e.add(n)}),void 0,console.log),o.load("/models/factory/CUPIC_FACTORy.gltf",(o=>{const n=o.scene;n.scale.setScalar(.02),n.children[2].visible=!1,n.position.set(-10,0,63),e.add(n)}),void 0,console.log),o.load("/models/canyon/model.gltf",(o=>{const n=o.scene;n.scale.setScalar(15),n.position.set(3,-7.5,85),e.add(n)}),void 0,console.log)}(I),await g.load("models/construction_barricades/scene.gltf",(function(e){const s=e.scene,a=s.clone(),r=s.clone();for(let o=0;o<a.children[0].children[0].children[0].children.length;o++)a.children[0].children[0].children[0].children[o].visible=o<4,r.children[0].children[0].children[0].children[o].visible=!(o<4),o>10&&(r.children[0].children[0].children[0].children[o].visible=!1);a.position.set(2,1,15),a.rotation.y+=Math.PI,I.add(a);for(let t=0;t<o.length;t++){const e=new c(.3,.3),s=new d({map:(new l).load(n(o[t].image)),transparent:!0}),a=new i(e,s),p=r.clone();a.position.set(.6,-.2,.05),p.add(a),h+=1.2,p.position.set(2,1,h),p.rotation.y+=Math.PI,I.add(p)}for(let o=0;o<t.length;o++){const e=new c(.3,.3),n=new d({map:(new l).load(t[o].image),transparent:!0}),s=new i(e,n),a=r.clone();s.position.set(.6,-.2,.05),a.add(s),h+=1.2,a.position.set(2,1,h),a.rotation.y+=Math.PI,I.add(a)}}),void 0,(function(e){console.error(e)}))})();function F(){requestAnimationFrame(F),T.rotation.x+=.01,T.rotation.y+=.02,T.rotation.z+=.02,_&&(_.rotation.y+=.02),M.render(I,P)}window.addEventListener("scroll",(e=>{const o=window.scrollY;s(o),P.position.z=o/100})),F(),F();