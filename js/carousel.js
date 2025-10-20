

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    constructor(img, title, link) {
        this.img = img;
        this.title = title;
        this.link = link;
    }
      
    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel._arr = arr;
                Carousel.Next(); //start
                clearInterval(Carousel._interval);
                Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
        let item = Carousel._arr[Carousel._sequence];
        clearInterval(Carousel._interval);
        Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);

        document.getElementById("carousel").innerHTML =
            `<a href="${item.link}">
                <img src="${item.img}" alt="${item.title}" style="width:100%;max-height:100%;object-fit:contain;border-radius:10px;">
            </a>`;
        
        document.getElementById("carousel-title").innerHTML =
            `<p style="font-size:18px;font-weight:bold;margin-top:10px;">${item.title}</p>`;
            
        Carousel._sequence++;
        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }  
    }

    static Prev() {
        let item = Carousel._arr[Carousel._sequence];
        clearInterval(Carousel._interval);
        Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
        
        document.getElementById("carousel").innerHTML =
            `<a href="${item.link}">
                <img src="${item.img}" alt="${item.title}" style="width:100%;max-height:100%;object-fit:contain;border-radius:10px;">
            </a>`;
        
        document.getElementById("carousel-title").innerHTML =
            `<p style="font-size:18px;font-weight:bold;margin-top:10px;">${item.title}</p>`;
            
        Carousel._sequence--;
        if (Carousel._sequence < 0) {
            Carousel._sequence = Carousel._size - 1;
        }
    }
};
