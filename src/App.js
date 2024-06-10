import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';


const services = [
  "Front End Development",
  "Backend Development",
  "Product Design",
];


function App() {
  const { text } = useTypewriter({
    words: ['Frontend', 'Backend'],
    // loop: {}
  });

  return (
    <>
      <div className="home-freelancer main-bg">

        {/* ==================== Start Loading ==================== */}
        <div className="loader-wrap">
          <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z" />
          </svg>
          <div className="loader-wrap-heading">
            <div className="load-text">
              <span>A</span>
              <span>M</span>
              <span>I</span>
              <span>R</span>
              <span>K</span>
              <span>H</span>
              <span>A</span>
              <span>N</span>

            </div>
          </div>
        </div>
        {/* ==================== End Loading ==================== */}

        {/* <div className="cursor" /> */}

        {/* ============= Start progress-scroll-button =============== */}
        <div className="progress-wrap cursor-pointer">
          <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
        {/* ==================== End progress-scroll-button ==================== */}

        <div id="smooth-wrapper">

          {/* ==================== Start Navbar ==================== */}
          <nav className="navbar navbar-expand-lg main-bg">
            <div className="container">
              <a className="logo icon-img-100" href="#">
                <img src="assets/imgs/logo-light.jpg" alt="logo" />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bar"><i className="fas fa-bars" /></span>
              </button>

              <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  {["Home", "About", "Projects", "Contact"].map((item, index) => (
                    <li className="nav-item" key={index}>
                      <a className="nav-link" href="#0" data-scroll-nav={index}><span className="rolling-text">{item}</span></a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
          {/* ==================== End Navbar ==================== */}

          <div id="smooth-content">
            <div className="main-box main-bg ontop">

              {/* ==================== Start Intro ==================== */}
              <header className="header-freelancer full-height bord-thin-bottom valign position-re" data-overlay-dark={5} data-scroll-index={0}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-7">
                      <div className="caption">
                        <h4 className="fw-400 mb-15">Hello
                          <span className="icon-img-40"><img src="assets/imgs/svg-assets/hi.gif" alt="waving hand image" /></span>
                          , I&apos;m Raja Amir Khan
                        </h4>
                        <h1 className="fz-60">FULL STACK <br />{text} WEB DEVELOPER</h1>
                        <div className="row mt-50">

                          <div className="col-lg-8 valign order1 md-mb50">
                            <p className="fz-16 text-justify">I am a dedicated and versatile Full Stack Web Developer with a robust background in both front-end and back-end technologies. My expertise lies in designing, developing, and maintaining dynamic and responsive web applications that enhance user experiences and streamline operations.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-img" data-background="assets/imgs/freelancer/h2.png" />
              </header>
              {/* ==================== End Intro ==================== */}

              <main className="position-re">

                {/* ==================== Start Marquee ==================== */}
                <section className="serv-marq bord-thin-bottom">
                  <div className="container-fluid ontop sub-bg rest pt-20 pb-20">
                    <div className="row">
                      <div className="col-12">
                        <div className="main-marq light-text">
                          <div className="slide-har st1">
                            {Array(2).fill().map((_, index) => (
                              <div className="box non-strok" key={index}>
                                {services.map((service, idx) => (
                                  <div className="item" key={idx}>
                                    <h4 className="d-flex align-items-center">
                                      <span>{service}</span>
                                      <span className="fz-50 ml-50 stroke icon">*</span>
                                    </h4>
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* ==================== End Marquee ==================== */}

                {/* ==================== Start skills ==================== */}
                <section className="skills-exp section-padding sub-bg" data-scroll-index={1}>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="sec-lg-head mb-20">
                          <div className="position-re">
                            <h6 className="dot-titl-non mb-10 wow fadeIn">Skills &amp; Experience</h6>
                          </div>
                        </div>
                        <div className="skill-item d-flex flex-wrap justify-content-center md-mb50">
                          <div className="item text-center">
                            <div className="icon-img-60 m-auto">
                              <img src="assets/imgs/freelancer/skills/html.png" alt />
                            </div>
                            <span className="mt-15">HTML 5</span>
                          </div>
                          <div className="item text-center">
                            <div className="icon-img-60 m-auto">
                              <img src="assets/imgs/freelancer/skills/css.png" alt />
                            </div>
                            <span className="mt-15">CSS</span>
                          </div>
                          <div className="item text-center">
                            <div className="icon-img-60 m-auto">
                              <img src="assets/imgs/freelancer/skills/js.png" alt />
                            </div>
                            <span className="mt-15">Java Script</span>
                          </div>
                          <div className="item text-center">
                            <div className="icon-img-60 m-auto">
                              <img src="assets/imgs/freelancer/skills/bootstrap.png" alt />
                            </div>
                            <span className="mt-15">Bootstrap</span>
                          </div>
                          <div className="item text-center">
                            <div className="icon-img-60 m-auto">
                              <img src="assets/imgs/freelancer/skills/tailwind.png" alt />
                            </div>
                            <span className="mt-15">Tailwind CSS</span>
                          </div>
                          <div className="item text-center">
                            <div className="icon-img-60 m-auto">
                              <img src="assets/imgs/freelancer/skills/react.png" alt />
                            </div>
                            <span className="mt-15">React JS</span>
                          </div>
                          <div className="item text-center">
                            <div className="icon-img-60 m-auto">
                              <img src="assets/imgs/freelancer/skills/node.png" alt />
                            </div>
                            <span className="mt-15">Node JS</span>
                          </div>
                          <div className="item text-center">
                            <div className="icon-img-60 m-auto">
                              <img src="assets/imgs/freelancer/skills/mongo.png" alt />
                            </div>
                            <span className="mt-15">Mongo DB</span>
                          </div>
                          <div className="item text-center">
                            <div className="icon-img-60 m-auto">
                              <img src="assets/imgs/freelancer/skills/github.png" alt />
                            </div>
                            <span className="mt-15">Git Hub</span>
                          </div>
                          <div className="item text-center">
                            <div className="icon-img-60 m-auto">
                              <img src="assets/imgs/freelancer/skills/gitbash.png" alt />
                            </div>
                            <span className="mt-15">Git</span>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-5 offset-lg-1 valign">
                        <div className="exp-items full-width">
                          <h2 className="fz-50 d-rotate wow">
                            <span className="rotate-text">My Experience</span>
                          </h2>
                          {/* <div className="item d-flex pb-30 pt-30 mb-30 mt-4 bord-thin-top bord-thin-bottom">
                            <div className="title">
                              <h6>Coderatory</h6>
                              <p className="fz-12">Intern as Frontend Developer</p>
                            </div>
                            <div className="date ml-auto text-right">
                              <span className="icon">
                                <a href="page-about.html">
                                  <i className="fas fa-arrow-right" />
                                </a>
                              </span>
                              <p className="fz-12">October 2023 - December 2024</p>
                            </div>
                          </div> */}
                          <div className="item d-flex pb-30 mb-30 bord-thin-bottom">
                            <div className="title">
                              <h6>Insoft IT</h6>
                              <p className="fz-12">MERN Stack Developer</p>
                            </div>
                            <div className="date ml-auto text-right">
                              {/* <span className="icon">
                                <a href="page-about.html">
                                <i className="fas fa-arrow-right" />
                                </a>
                              </span> */}
                              <p className="fz-12">Febuary 2024 - April 2024</p>
                            </div>
                          </div>
                          {/* <div className="item d-flex pb-30 bord-thin-bottom">
                            <div className="title">
                              <h6>Apple</h6>
                              <p className="fz-12">ios Developer</p>
                            </div>
                            <div className="date ml-auto text-right">
                              <span className="icon">
                                <a href="page-about.html">
                                  <i className="fas fa-arrow-right" />
                                </a>
                              </span>
                              <p className="fz-12">2019 - 2021</p>
                            </div>
                          </div> */}
                          <div className="m-30">
                            <a href="assets/Raja Amir Khan Resume.pdf" target="blank" className="butn butn-full butn-bord radius-30">
                              <span className="text">Download Resume</span>
                            </a>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </section>
                {/* ==================== End skills ==================== */}

                {/* ==================== Start Portfolio ==================== */}
                <section className="portfolio clasic section-padding" data-scroll-index={2}>
                  <div className="container">
                    <div className="sec-lg-head mb-50">
                      <div className="row">
                        <div className="col-lg-7">
                          <div className="position-re">
                            <h6 className="dot-titl-non mb-10 fadeIn">Portfolio</h6>
                            <h2 className="fz-50 d-rotate wow">
                              <span className="rotate-text">Projects</span>
                            </h2>
                          </div>
                        </div>
                        {/* <div className="col-lg-5 d-flex align-items-center">
                          <div className="full-width d-flex justify-content-end justify-end">
                            <div className="vew-all">
                              <a href="portfolio-classic-grid.html">View All Works
                                <span>
                                  <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor" />
                                  </svg>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="item mt-30">
                          <div className="o-hidden">
                            <div className="img imago wow">
                              <img src="assets/imgs/freelancer/works/1.png" alt className="radius-10" />
                              <a href="https://oneclickdigital-hassan.vercel.app/" className="tag" target='blank'>
                                <span>Veiw</span>
                              </a>
                            </div>
                          </div>
                          <div className="cont mt-30 d-flex wow fadeIn" data-wow-delay=".4s">
                            <div>
                              <h6 className="line-height-1"><a href="https://oneclickdigital-hassan.vercel.app/" target='blank'>Oneclick Digital</a></h6>
                            </div>
                            {/* <div className="ml-auto">
                              <p className="fz-14">© 2023</p>
                            </div> */}
                          </div>
                        </div>
                      </div>
                      {/* <div className="col-lg-6">
                        <div className="item mt-30">
                          <div className="o-hidden">
                            <div className="img imago wow">
                              <img src="assets/imgs/freelancer/works/2.jpg" alt className="radius-10" />
                              <a href="project-details1.html" className="tag">
                                <span>Branding</span>
                              </a>
                            </div>
                          </div>
                          <div className="cont mt-30 d-flex wow fadeIn" data-wow-delay=".4s">
                            <div>
                              <h6 className="line-height-1"><a href="project-details1.html">Luxury Modern
                                Chair</a></h6>
                            </div>
                            <div className="ml-auto">
                              <p className="fz-14">© 2023</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="item mt-30">
                          <div className="o-hidden">
                            <div className="img imago wow">
                              <img src="assets/imgs/freelancer/works/3.jpg" alt className="radius-10" />
                              <a href="project-details1.html" className="tag">
                                <span>Branding</span>
                              </a>
                            </div>
                          </div>
                          <div className="cont mt-30 d-flex wow fadeIn" data-wow-delay=".4s">
                            <div>
                              <h6 className="line-height-1"><a href="project-details1.html">Partiner
                                BPO</a>
                              </h6>
                            </div>
                            <div className="ml-auto">
                              <p className="fz-14">© 2023</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="item mt-30">
                          <div className="o-hidden">
                            <div className="img imago wow">
                              <img src="assets/imgs/freelancer/works/4.jpg" alt className="radius-10" />
                              <a href="project-details1.html" className="tag">
                                <span>Branding</span>
                              </a>
                            </div>
                          </div>
                          <div className="cont mt-30 d-flex wow fadeIn" data-wow-delay=".4s">
                            <div>
                              <h6 className="line-height-1"><a href="project-details1.html">From our
                                gallery</a></h6>
                            </div>
                            <div className="ml-auto">
                              <p className="fz-14">© 2023</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="item mt-30">
                          <div className="o-hidden">
                            <div className="img imago wow">
                              <img src="assets/imgs/freelancer/works/5.jpg" alt className="radius-10" />
                              <a href="project-details1.html" className="tag">
                                <span>Branding</span>
                              </a>
                            </div>
                          </div>
                          <div className="cont mt-30 d-flex wow fadeIn" data-wow-delay=".4s">
                            <div>
                              <h6 className="line-height-1"><a href="project-details1.html">Astra Brand
                                Identity</a></h6>
                            </div>
                            <div className="ml-auto">
                              <p className="fz-14">© 2023</p>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </section>
                {/* ==================== End Portfolio ==================== */}
              </main>
            </div>

            {/* ==================== Start Contact ==================== */}
            <section section className="contact-crev section-padding" data-scroll-index={3}>
              <div className="contact-container">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="sec-lg-head md-mb80">
                        <h6 className="dot-titl-non mb-10 wow fadeIn">Get In Touch</h6>
                        <h2 className="fz-50 d-rotate wow">
                          <span className="rotate-text">Let's Talk!</span>
                        </h2>
                        <p className="fz-15 mt-10 wow fadeIn">If you would like to work with me or just want to get in touch, I&apos;d love to hear from you!</p>
                        <div className="phone fz-30 fw-600 mt-30 underline wow fadeIn">
                          <a href="#0">+92 310 327 22 90</a>
                        </div>
                        <ul className="rest social-text d-flex mt-60">
                          {/* <li className="mr-30">
                            <a href="#0" className="hover-this"><span className="hover-anim">Facebook</span></a>
                          </li> */}

                          <li className="mr-30">
                            <a href="https://linkedin.com/in/rajaamirsamejo" className="hover-this" target="blank"><span className="hover-anim" >LinkedIn</span></a>
                          </li>
                          <li className="mr-30">
                            <a href="https://wa.me/+923103272290" className="hover-this" target="blank"><span className="hover-anim">Whatsapp</span></a>
                          </li>
                          {/* <li>
                            <a href="#0" className="hover-this"><span className="hover-anim">Instagram</span></a>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 valign">
                      <div className="full-width">
                        <form id="contact-form" method="post" action="#">
                          <div className="messages" />
                          <div className="controls row">
                            <div className="col-lg-6">
                              <div className="form-group mb-30">
                                <input id="form_name" type="text" name="name" placeholder="Name" required="required" />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group mb-30">
                                <input id="form_email" type="email" name="email" placeholder="Email" required="required" />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group mb-30">
                                <input id="form_subject" type="text" name="subject" placeholder="Subject" />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <textarea id="form_message" name="message" placeholder="Message" rows={4} required="required" defaultValue={""} />
                              </div>
                              <div className="mt-30">
                                <button type="submit" className="butn butn-full butn-bord radius-30">
                                  <span className="text">Let's Talk</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ==================== End Contact ==================== */}

            {/* ==================== Start Footer ==================== */}
            <footer className="sub-bg">
              <div className="sub-footer pt-40 pb-40 bord-thin-top">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4">
                      <p className="fz-13">&copy; 2024 Raja Amir Khan</p>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            {/* ==================== End Footer ==================== */}
          </div >
        </div >
      </div >

    </>
  );
}

export default App;
