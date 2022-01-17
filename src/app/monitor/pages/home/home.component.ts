import { Component, OnInit } from "@angular/core";
import { ExampleService } from "src/app/core/services/example.service";
import Swiper, {
  Autoplay,
  Navigation,
  Pagination,
  SwiperOptions,
} from "swiper";

Swiper.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(public exampleService: ExampleService) {}

  configLogoSwiper: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: false,
    loop: true,
    pagination: false,
    breakpoints: {
      // when window width is >= 320px
      640: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    scrollbar: { draggable: true },
  };

  configCommentsSwiper: SwiperOptions = {
    slidesPerView:1,
    navigation:false,
    loop:true,
    pagination:{clickable:true,
                type:'fraction'},
    autoplay:{
      delay: 5000,
      disableOnInteraction: false
    },
    scrollbar: { draggable: true }
  };

  logos = [
    {
      ref: "https://www.oplcarga.com/",
      img: "https://www.monitorpro.ai/wp-content/uploads/2021/12/opl.png",
      alt: "OPL CARGA Logo",
    },
    {
      ref: "https://logicem.com/",
      img: "https://www.monitorpro.ai/wp-content/uploads/2021/12/logicem.png",
      alt: "LOGICEM Logo",
    },
    {
      ref: "http://www.tractocar.com/",
      img: "https://www.monitorpro.ai/wp-content/uploads/2021/12/tractocar.png",
      alt: "TRACTOCAR Logo",
    },
    {
      ref: "https://www.grankarga.com/",
      img: "https://www.monitorpro.ai/wp-content/uploads/2021/12/grankarga.png",
      alt: "GRANKARGA Logo",
    },
    {
      ref: "https://www.entrekarga.com/",
      img:
        "https://www.monitorpro.ai/wp-content/uploads/2021/12/entrekarga.png",
      alt: "ENTREKARGA Logo",
    },
    {
      ref: "#",
      img: "https://www.monitorpro.ai/wp-content/uploads/2021/12/wcargo.png",
      alt: "TRANSPORTE WCARGO Logo",
    },
    {
      ref: "http://mercologis.com/",
      img: "https://www.monitorpro.ai/wp-content/uploads/2021/12/merco.png",
      alt: "GRUPO MERCO Logo",
    },
    {
      ref: "https://transjoalco.com.co/",
      img:
        "https://www.monitorpro.ai/wp-content/uploads/2021/12/TransporteJoalco.png",
      alt: "TRANSPORTE JOALCO Logo",
    },
    {
      ref: "#",
      img: "https://www.monitorpro.ai/wp-content/uploads/2021/12/ghc.png",
      alt: "GHC Logo",
    },
    {
      ref: "https://www.ditransa.com.co/",
      img: "https://www.monitorpro.ai/wp-content/uploads/2021/12/ditransa.png",
      alt: "DITRANSA Logo",
    },
    {
      ref: "https://suramericanadetransportes.com/",
      img:
        "https://www.monitorpro.ai/wp-content/uploads/2021/12/suramericana.png",
      alt: "SURAMERICANA Logo",
    },
    {
      ref: "http://www.transgraneles.com.co/",
      img:
        "https://www.monitorpro.ai/wp-content/uploads/2022/01/Transgraneles.png",
      alt: "TRANSGRANELES Logo",
    },
    {
      ref: "https://www.cointra.com.co/",
      img: "https://www.monitorpro.ai/wp-content/uploads/2022/01/COINTRA.jpg",
      alt: "COINTRA Logo",
    },
  ];

  comments = [{ author: "Juan Carlos Ferreiros", role: "Vicepresidente de Operaciones, OPL CARGA", comment: "Encontramos en MONITOR una plataforma que nos ayuda a simplificar la tarea del monitoreo de la carga, automatizando algunas tareas repetitivas y optimizando el recurso humano requerido para estas actividades. Tiene como gran fortaleza el poder integrar cualquier operador de GPS, funcionalidad que valoramos mucho, ya que empleamos flota de terceros y por esta razón los vehículos pueden traer cualquier clase de GPS." },
  { author: "Gustavo Enrique Ramos", role: "Director de TI, TRACTOCAR LOGISTICS", comment: "Hemos encontrado en MONITOR una plataforma que además de facilitar y optimizar las tareas de seguimiento a los despachos, nos permite integrar fácilmente los demás sistemas de la compañía. MONITOR ofrece gran variedad de conectores, que permiten no solo entregar en tiempo real los datos de cada despacho para su monitoreo, sino que también permite consultar información de novedades, ubicación y tiempos logísticos de cada despacho para actualizar nuestro sistema TMS." },
  { author: "Juan Fernando Arboleda G", role: "Gerente, Grankarga S.A", comment: "Con MONITOR hemos logrado tener una vista completa de todos nuestros despachos en un solo tablero de control. Ahora nuestra torre de control tiene la capacidad de hacer seguimiento al 100% de la flota, ya que los robots de la plataforma se hacen cargo de las tareas repetitivas, y nuestro personal tiene más tiempo para atender las alertas automáticas que el sistema va reportando. Adicionalmente hemos logrado mejorar la experiencia para nuestros clientes, con el envío automático de reportes sobre el estado de sus despachos, con la periodicidad que cada cliente prefiera.En los últimos días hemos tenido acceso al portal de consultas, el cual le permite a nuestros clientes ingresar y obtener información en tiempo real sobre la ubicación de sus despachos, y descargar información sobre los mismos en el momento que lo requieran." }];
  
  ngOnInit(): void {}
  
  
}
