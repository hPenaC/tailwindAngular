import { Component, OnInit } from "@angular/core";
import { ExampleService } from "src/app/core/services/example.service";
import Swiper , { Autoplay, Navigation, Pagination, SwiperOptions } from 'swiper';

Swiper.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(public exampleService: ExampleService) {}

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: false,
    loop:true,    
    pagination: false,
    breakpoints: {
      // when window width is >= 320px
      640: {
        slidesPerView: 6,
        spaceBetween: 20
      }
    },
    autoplay:{
      delay: 5000,
      disableOnInteraction: false
    },
    scrollbar: { draggable: true },
  };

  logos=[{ref:'https://www.oplcarga.com/',
          img:'https://www.monitorpro.ai/wp-content/uploads/2021/12/opl.png',
          alt:'OPL CARGA Logo'},
          {ref:'https://logicem.com/',
          img:'https://www.monitorpro.ai/wp-content/uploads/2021/12/logicem.png',
          alt:'LOGICEM Logo'},
          {ref:'http://www.tractocar.com/',
          img:'https://www.monitorpro.ai/wp-content/uploads/2021/12/tractocar.png',
          alt:'TRACTOCAR Logo'},
          {ref:'https://www.grankarga.com/',
          img:'https://www.monitorpro.ai/wp-content/uploads/2021/12/grankarga.png',
          alt:'GRANKARGA Logo'},
          {ref:'https://www.entrekarga.com/',
          img:'https://www.monitorpro.ai/wp-content/uploads/2021/12/entrekarga.png',
          alt:'ENTREKARGA Logo'},
          {ref:'#',
          img:'https://www.monitorpro.ai/wp-content/uploads/2021/12/wcargo.png',
          alt:'TRANSPORTE WCARGO Logo'},
          {ref:'http://mercologis.com/',
          img:'https://www.monitorpro.ai/wp-content/uploads/2021/12/merco.png',
          alt:'GRUPO MERCO Logo'},
          {ref:'https://transjoalco.com.co/',
          img:'https://www.monitorpro.ai/wp-content/uploads/2021/12/TransporteJoalco.png',
          alt:'TRANSPORTE JOALCO Logo'},
          {ref:'#',
          img:'https://www.monitorpro.ai/wp-content/uploads/2021/12/ghc.png',
          alt:'GHC Logo'},
          {ref:'https://www.ditransa.com.co/',
          img:'https://www.monitorpro.ai/wp-content/uploads/2021/12/ditransa.png',
          alt:'DITRANSA Logo'},
          {ref:'https://suramericanadetransportes.com/',
          img:'https://www.monitorpro.ai/wp-content/uploads/2021/12/suramericana.png',
          alt:'SURAMERICANA Logo'},
          {ref:'http://www.transgraneles.com.co/',
          img:'https://www.monitorpro.ai/wp-content/uploads/2022/01/Transgraneles.png',
          alt:'TRANSGRANELES Logo'},
          {ref:'https://www.cointra.com.co/',
          img:'https://www.monitorpro.ai/wp-content/uploads/2022/01/COINTRA.jpg',
          alt:'COINTRA Logo'},

          

    
  ];

  ngOnInit(): void {}  

  onSwiper(swiper:any) {
    console.log(swiper);
  }

  onSlideChange() {
    console.log('slide change');
  }
  
}
