function mainContainer(reactEle,container){
    const domEl = document.createElement(reactEle.type)
    domEl.innerHTML = reactEle.children;
    document.setAttribute('href',reactEle.props.href)
    document.setAttribute('href',reactEle.props.target)
    container.appendChild(domEl)
}

const reactEle ={
    type:'a',
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children: "Click me for google"
}

const mainContainer =document.querySelector('#root')
