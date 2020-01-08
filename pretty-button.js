class PrettyButton extends HTMLElement {
  connectedCallback() {
    const caption = this.getAttribute('caption');
    const shadow = this.attachShadow({mode: 'open'});
    const color = this.getAttribute('color') ?
      this.getAttribute('color') : "#000000";
    const backgroundColor = this.getAttribute('backgroundColor') ?
      this.getAttribute('backgroundColor') : "#d8d8d8";
    const width = this.getAttribute('width') ?
      this.getAttribute('width') : "200px";
    const height = this.getAttribute('height') ?
      this.getAttribute('height') : "50px";
    const borderRadius = this.getAttribute('borderRadius') ?
      this.getAttribute('borderRadius') : "5px";

    function clickHandler() {
      setTimeout(() => {
        event.path[1].children[1].style.width = '1px';
        event.path[1].children[1].style.height = '1px';
        event.path[1].children[1].style.borderRadius = '1px';
        event.path[1].children[1].style.display = 'none';
      }, 500);
      event.target.parentNode.children[1].style.display = 'initial';
      event.target.parentNode.children[1].style.opacity = `1`;

      const sleep = ms => {
        return new Promise(resolve => setTimeout(resolve, ms))
      };
      let circle = event.target.parentNode.children[1];
      let x = event.offsetX;
      let y = event.offsetY;
      const spredStep = (area, circle,x,y)=>{
        circle.style.left = `${x - area / 2}px`;
        circle.style.top = `${y - area / 2}px`;
        circle.style.borderRadius = `${area / 2}px`;
        circle.style.height = `${area}px`;
        circle.style.width = `${area}px`;
        circle.style.opacity = `0`;
      };
  let grow, pause, msc = 2;
      (async _ => {
        grow = await spredStep(10, circle,x, y);
        pause = await sleep(msc);
        grow= await spredStep(20, circle,x, y);
        pause = await sleep(msc);
        grow= await spredStep(30, circle,x, y);
        pause = await sleep(msc);
        grow= await spredStep(40, circle,x, y);
        pause = await sleep(msc);
        grow= await spredStep(50, circle,x, y);
        pause = await sleep(msc);
        grow= await spredStep(100, circle,x, y);
        pause = await sleep(msc);
        grow= await spredStep(200, circle,x, y);
      })();

      return ''
    };

    shadow.innerHTML = `<div style=
background-color:${backgroundColor
      };color:${color
      };width:${width
      };height:${height
      };text-align:${"center"
      };border-radius:${borderRadius
      };border:${`solid`
      };border-width:${`1px`
      };border-color:${`#d8d8d8`
      };display:${"flex"
      };flex-direction:${"column"
      };justify-content:${"center"
      };cursor:${"pointer"
      };position:${"relative"
      };overflow:${"hidden"
      }

onclick="(()=>{
  setTimeout(() => {
        this.style.backgroundColor = '#d8d8d8';
      }, 50);
      this.style.backgroundColor = '#000000';
      })()"
>
      <button style=
width:${"102%"
      };height:${"105%"
      };position:${"absolute"
      };top:${"-1px"
      };left:${"-1px"
      };
      >${caption}</button>
      <div id="shadowOfTouchContaner"
      style=
background-color:${"#000000"
      };display:${"none"
      };opacity:${"0.5"
      };transition-property:${"opacity"
      };transition-duration:${"300ms"
      };width:${"10px"
      };height:${"10px"
      };position:${"absolute"
      };top:${width/2
      };left:${height/2
      };border-radius:${"5px"
      };
      >
      
</div>
      <div id="clickArea" 
      style=
background-color:${"red"
      };opacity:${"0"
      };width:${"100%"
      };height:${"100%"
      };position:${"absolute"
      };top:${"0px"
      };left:${"0px"
      };
 onclick="(()=>{console.log(${clickHandler}());})()"
      ></div>
    </div>`;
  }
}

window.customElements.define("pretty-button", PrettyButton);
