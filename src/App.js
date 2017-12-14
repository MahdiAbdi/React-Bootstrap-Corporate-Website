import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import OurServices from './Components/OurServices';
import Subscribe from './Components/Subscribe';
import Portfolio from './Components/Portfolio';
import Testimonials from './Components/Testimonials';
import OurTeam from './Components/OurTeam';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import './font.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      home : {
        logo: "https://bootstrapmade.com/demo/themes/Imperial/img/logo.png",
        brand: "Vestaak",
        descriptions: [
          "Beautiful graphics",
          "Working Mobile Apps",
          "Functionial websites",
          "Super useless things :))",
        ],
        interval: 2000,
        background: 'https://bootstrapmade.com/demo/themes/Imperial/img/hero-bg.jpg',
        buttons: [
          {
            text: "Get Started",
            href: '#',
            style: 'get-started',
          },
          {
            text: "Services",
            href: '#',
            style: 'services',
          },
          {
            text: "Our Team",
            href: '#',
            style: 'get-started',
          },
          {
            text: "Portfolio",
            href: '#',
            style: 'get-started',
          },
          {
            text: "Testimonials",
            href: '#',
            style: 'services',
          }
        ]
      },
      footer : {
        name: "Mahdi's Theme :))",
        company: 'Vestaak',
        href: 'http://mmaf.ir'
      },
      navBar : {
        brand: "Vestaak",
        navItems: [
          {name: 'Home', href: '#'},
          {name: 'Services', href: '#'},
          {name: 'Portfolio', href: '#'},
          {name: 'Clients', href: '#'},
          {name: 'Team', href: '#'},
          {name: 'Contact', href: '#'},
        ],
      },
      aboutUs : {
        title: "We provide great services and ideas",
        text : "asdadsLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptateUlnostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptateUlnostrudexercitation ullamco l ",
        description: "We create beautiful graphicsLorem ipsum dolor sit amet, consectetur adipiscing e",
        background: 'https://bootstrapmade.com/demo/themes/Imperial/img/about-img.jpg',
      },
      ourTeam : {
        title : 'Our Team',
        description : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque',
        column: 3,
        limit: 5,
        socials: [
          'facebook', 'twitter', 'dribbble'
        ],
        data : [
          {
            name: 'baby Stewards Jr',
            img: 'https://bootstrapmade.com/demo/themes/Groovin/assets/img/dummies/team1.jpg',
            position: 'CEO - Founder',
            social : {
              facebook: '#',
              twitter: '#',
              dribbble: ''
            }
          },
          {
            name: 'Tommy Kreunichev',
            img: 'https://bootstrapmade.com/demo/themes/Groovin/assets/img/dummies/team2.jpg',
            position: ' Lead designer ',
            social : {
              facebook: '#',
              twitter: '',
              dribbble: '#'
            }
          },
          {
            name: 'Moriella Maccini',
            img: 'https://bootstrapmade.com/demo/themes/Groovin/assets/img/dummies/team3.jpg',
            position: 'Customer support',
            social : {
              facebook: '',
              twitter: '#',
              dribbble: '#'
            }
          },
          {
            name: 'Brian James Scoothie',
            img: 'https://bootstrapmade.com/demo/themes/Groovin/assets/img/dummies/team4.jpg',
            position: 'Coffee maker',
            social : {
              facebook: '#',
              twitter: '',
              dribbble: '#'
            }
          },
          {
            name: 'Sarah Jhinson',
            img: 'https://bootstrapmade.com/demo/themes/Imperial/img/team-2.jpg',
            position: 'Product Manager',
            social : {
              facebook: '',
              twitter: '',
              dribbble: '#'
            }
          },
          {
            name: 'Amanda Jepson',
            img: 'https://bootstrapmade.com/demo/themes/Imperial/img/team-4.jpg',
            position: 'Accountant',
            social : {
              facebook: '#',
              twitter: '#',
              dribbble: '#'
            }
          },
        ],
      },
      subscribe : {
        title: "Subscribe For Updates",
        description: "Join our 1000+ subscribers and get access to the latest tools, freebies, product announcements and much more!",
        btn: "Subscribe Now!",
      },
      portfolio : {
        title: 'Portfolio',
        description: "Si stante, hoc natura videlicet vult, salvam esse se, quod concedimus ses haec dicturum fuisse",
        column: 6,
        portfolios: [
          {
            title: 'Portfolio 23',
            description: 'Alfred dona par',
            href: '#',
            img: 'https://bootstrapmade.com/demo/themes/Imperial/img/portfolio-1.jpg',
          },
          {
            title: 'Portfolio 1',
            description: 'Alfred dona par',
            href: '#',
            img: 'https://bootstrapmade.com/demo/themes/Imperial/img/portfolio-1.jpg',
          },
          {
            title: 'Portfolio 1',
            description: 'Alfred dona par',
            href: '#',
            img: 'https://bootstrapmade.com/demo/themes/Imperial/img/portfolio-1.jpg',
          },
          {
            title: 'Portfolio 1',
            description: 'Alfred dona par',
            href: '#',
            img: 'https://bootstrapmade.com/demo/themes/Imperial/img/portfolio-1.jpg',
          },
          {
            title: 'Portfolio 1',
            description: 'Alfred dona par',
            href: '#',
            img: 'https://bootstrapmade.com/demo/themes/Imperial/img/portfolio-1.jpg',
          },
          {
            title: 'Portfolio 1',
            description: 'Alfred dona par',
            href: '#',
            img: 'https://bootstrapmade.com/demo/themes/Imperial/img/portfolio-1.jpg',
          },
          {
            title: 'Portfolio 1',
            description: 'Alfred dona par',
            href: '#',
            img: 'https://bootstrapmade.com/demo/themes/Imperial/img/portfolio-1.jpg',
          },
          {
            title: 'Portfolio 1',
            description: 'Alfred dona par',
            href: '#',
            img: 'https://bootstrapmade.com/demo/themes/Imperial/img/portfolio-1.jpg',
          },
        ],
      },
      contactUs : {
        title : 'Contact Us',
        description : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque',
        data : [
          {
            icon: 'tag',
            text: 'A108 Adam Street, New York, NY 535022'
          },
          {
            icon: 'envelope',
            text: 'info@example.com'
          },
          {
            icon: 'phone',
            text: '+1 5589 55488 55s'
          },
          {
            icon: 'bug',
            text: 'No Bug :D'
          },
        ],
      },
      ourServices : {
        description: "We provide great services and ideasWe provide great services and ideas",
        column: 4,
        services : [
          {
            glyph: 'tag',
            title: 'ipsum',
            desc: 'ipsumipsumipsumipsumipsumi psumipsumipsum'
          },
          {
            glyph: 'facebook',
            title: 'ipsum',
            desc: 'ipsumipsumipsumipsumipsumi psumipsumipsum'
          },
          {
            glyph: 'twitter',
            title: 'ipsum',
            desc: 'ipsumipsumipsumipsumipsumi psumipsumipsum'
          },
          {
            glyph: 'camera',
            title: 'ipsum',
            desc: 'ipsumipsumipsumipsumipsumi psumipsumipsum'
          },
          {
            glyph: 'car',
            title: 'ipsum',
            desc: 'ipsumipsumipsumipsumipsumi psumipsumipsum'
          },
          {
            glyph: 'dribbble',
            title: 'ipsum',
            desc: 'ipsumipsumipsumipsumipsumi psumipsumipsum'
          },
        ],
      },
      testimonials : {
        title: 'Testimonials',
        description: 'Erdo lide, nora porodo filece, salvam esse se, quod concedimus ses haec dicturum fuisse',
        limit: 3,
        data : [
          {
            name: 'Saul Goodman',
            img: 'https://bootstrapmade.com/demo/themes/Imperial/img/client-1.jpg',
            company: 'Lawless Inc',
            quote: "Proin iaculis Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper."
          },
          {
            name: 'Sara Wilsson',
            img: 'https://bootstrapmade.com/demo/themes/Imperial/img/client-2.jpg',
            company: 'Odeo Inc',
            quote: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis architecto beatae."
          },
          {
            name: 'Mahdi Abdi',
            img: 'https://bootstrapmade.com/demo/themes/Groovin/assets/img/dummies/team1.jpg',
            company: 'Vestaak Inc',
            quote: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis architecto beatae."
          },
          {
            name: 'Saul Goodman',
            img: 'https://bootstrapmade.com/demo/themes/Imperial/img/client-1.jpg',
            company: 'Lawless Inc',
            quote: "Proin iaculis Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper."
          },
          {
            name: 'Sara Wilsson',
            img: 'https://bootstrapmade.com/demo/themes/Imperial/img/client-2.jpg',
            company: 'Odeo Inc',
            quote: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis architecto beatae."
          },
          {
            name: 'Mahdi Abdi',
            img: 'https://bootstrapmade.com/demo/themes/Groovin/assets/img/dummies/team1.jpg',
            company: 'Vestaak Inc',
            quote: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis architecto beatae."
          },
        ]
      },
    }
  }

  render() {
    return (
      <div>
        <Home logo={this.state.home.logo} brand={this.state.home.brand} descriptions={this.state.home.descriptions} background={this.state.home.background} buttons={this.state.home.buttons} interval={this.state.home.interval} />
        <NavBar brand={this.state.navBar.brand} navItems={this.state.navBar.navItems} />
        <AboutUs title={this.state.aboutUs.title} text={this.state.aboutUs.text} description={this.state.aboutUs.description} background={this.state.aboutUs.background} />
        <OurServices services={this.state.ourServices.services} description={this.state.ourServices.description} column={this.state.ourServices.column} />
        <Subscribe title={this.state.subscribe.title} description={this.state.subscribe.description} btn={this.state.subscribe.btn} />
        <Portfolio title={this.state.portfolio.title} description={this.state.portfolio.description} portfolios={this.state.portfolio.portfolios} column={this.state.portfolio.column} />
        <Testimonials title={this.state.testimonials.title} description={this.state.testimonials.description} data={this.state.testimonials.data} limit={this.state.testimonials.limit} />
        <OurTeam title={this.state.ourTeam.title} description={this.state.ourTeam.description} data={this.state.ourTeam.data} column={this.state.ourTeam.column} limit={this.state.ourTeam.limit} socials={this.state.ourTeam.socials} />
        <ContactUs title={this.state.contactUs.title} description={this.state.contactUs.description} data={this.state.contactUs.data} />
        <Footer name={this.state.footer.name} company={this.state.footer.company} href={this.state.footer.name} />
      </div>
    )
  }
}

export default App;
