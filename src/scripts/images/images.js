window.addEventListener("DOMContentLoaded", addCards)

function addCards () {
  let elements = document.querySelector('.elements');
  let element = elements.querySelector('.element');
  elements.removeChild(element);


  for (let i = 0; i < images.length; i++) {
    element.querySelector('.element__name').innerHTML = images[i].name;
    element.querySelector('.element__image').src = images[i].link;
    element.querySelector('.element__counter').innerHTML = images[i].like;
    elements.appendChild(element.cloneNode(true));
  }

}

let images = [
  {
        name: "Landscape Images",
        link: "https://images.unsplash.com/photo-1676412952691-5e4a229485a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        like: 3
      },
  {
        name: "Texture Backgrounds",
        link: "https://images.unsplash.com/photo-1675530436715-9fcf2ca78a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        like: 0
      },
  {
        name: "Appalachian Mountains",
        link: "https://s9.travelask.ru/system/images/files/001/318/142/wysiwyg_jpg/appalacian-mountains-GettyImages-573798635.jpg?1559130735",
        like: 0
      },
  {
        name: "The Caucasus Mountainss",
        link: "https://icdn.bolshayastrana.com/940x00/a1/83/a18315923434e4697f16a3c1ec37fe2b.jpeg",
        like: 6
      },
      {
        name: "The Pacific Ocean",
        link: "https://about-planet.ru/images/avstralia/priroda/tixiy_okean/tixiy-okean.jpg",
        like: 3
      },
      {
        name: "Barabak long text name",
        link: "https://webpulse.imgsmail.ru/imgpreview?mb=webpulse&key=pulse_cabinet-image-d824aecf-3ce3-427f-9536-8a28cac186b4",
        like: 0
      }

  ]
