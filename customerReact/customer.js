 function Dom(creatFlement,main) {

    const domElement=document.createElement(creatFlement.type);
    domElement.innerHTML=creatFlement.children;
    for(const props in creatFlement){
        domElement.setAttribute(props,creatFlement[props]);
    }
    main.appendChild(domElement);
}
const creatFlement={
    type:'a',
    href:'https://google.com',
    children:'Google',
};
const main=document.getElementById('root');
Dom(creatFlement,main)
// const creatFlement={
//          type:'a',
//          href:'https://google.com',
//          children:'Google',
//      };
// for(props in creatFlement){
//     console.log(props)//this line only give key for example it gives us type,href;
//     console.log(props,creatFlement[props]);//this line give us key and value both,for example type a, children google
// }
