import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <>
      <div
        class="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div class="container py-5">
          <h1 class="display-3 text-white mb-3 animated slideInDown">
            About Us
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol class="breadcrumb text-uppercase mb-0">
              <li class="breadcrumb-item">
                <Link class="text-white" to="/">
                  Home
                </Link>
              </li>
              <li class="breadcrumb-item">
                <a class="text-white" href="#">
                  Pages
                </a>
              </li>
              <li
                class="breadcrumb-item text-primary active"
                aria-current="page"
              >
                About
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div class="d-flex flex-column">
                <img
                  class="img-fluid rounded w-75 align-self-end"
                  src="img/about-1.jpg"
                  alt=""
                ></img>
                <img
                  class="img-fluid rounded w-50 bg-white pt-3 pe-3"
                  src="img/about-2.jpg"
                  alt=""
                  style={{ marginTop: `-25%` }}
                ></img>
              </div>
            </div>
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <p class="d-inline-block border rounded-pill py-1 px-4">
                About Us
              </p>
              <h1 class="mb-4">Why You Should Trust Us? Get Know About Us!</h1>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <p class="mb-4">
                Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
                stet est diam rebum amet diam ipsum. Clita clita labore, dolor
                duo nonumy clita sit at, sed sit sanctus dolor eos.
              </p>
              <p>
                <i class="far fa-check-circle text-primary me-3"></i>Quality
                health care
              </p>
              <p>
                <i class="far fa-check-circle text-primary me-3"></i>Only
                Qualified Doctors
              </p>
              <p>
                <i class="far fa-check-circle text-primary me-3"></i>Medical
                Research Professionals
              </p>
              <a class="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid bg-primary overflow-hidden my-5 px-lg-0">
        <div class="container feature px-lg-0">
          <div class="row g-0 mx-lg-0">
            <div
              class="col-lg-6 feature-text py-5 wow fadeIn"
              data-wow-delay="0.1s"
            >
              <div class="p-lg-5 ps-lg-0">
                <p class="d-inline-block border rounded-pill text-light py-1 px-4">
                  Features
                </p>
                <h1 class="text-white mb-4">Why Choose Us</h1>
                <p class="text-white mb-4 pb-2">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo erat amet
                </p>
                <div class="row g-4">
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <div
                        class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ height: `50px`, width: `50px` }}
                      >
                        <i class="fa fa-user-md text-primary"></i>
                      </div>
                      <div class="ms-4">
                        <p class="text-white mb-2">Experience</p>
                        <h5 class="text-white mb-0">Doctors</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <div
                        class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: `50px`, height: `50px` }}
                      >
                        <i class="fa fa-check text-primary"></i>
                      </div>
                      <div class="ms-4">
                        <p class="text-white mb-2">Quality</p>
                        <h5 class="text-white mb-0">Services</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <div
                        class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ height: `50px`, width: `50px` }}
                      >
                        <i class="fa fa-comment-medical text-primary"></i>
                      </div>
                      <div class="ms-4">
                        <p class="text-white mb-2">Positive</p>
                        <h5 class="text-white mb-0">Consultation</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <div
                        class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ height: `50px`, width: `50px` }}
                      >
                        <i class="fa fa-headphones text-primary"></i>
                      </div>
                      <div class="ms-4">
                        <p class="text-white mb-2">24 Hours</p>
                        <h5 class="text-white mb-0">Support</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-lg-6 pe-lg-0 wow fadeIn"
              data-wow-delay="0.5s"
              style={{ minHeight: `50px` }}
            >
              <div class="position-relative h-100">
                <img
                  class="position-absolute img-fluid w-100 h-100"
                  src="img/feature.jpg"
                  style={{ objectFit: `cover` }}
                  alt=""
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: `600px` }}
          >
            <p class="d-inline-block border rounded-pill py-1 px-4">Doctors</p>
            <h1>Our Experience Doctors</h1>
          </div>
          <div class="row g-4">
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="team-item position-relative rounded overflow-hidden">
                <div class="overflow-hidden">
                  <img class="img-fluid" src="img/team-1.jpg" alt=""></img>
                </div>
                <div class="team-text bg-light text-center p-4">
                  <h5>Doctor Name</h5>
                  <p class="text-primary">Department</p>
                  <div class="team-social text-center">
                    <a class="btn btn-square" href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="btn btn-square" href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a class="btn btn-square" href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="team-item position-relative rounded overflow-hidden">
                <div class="overflow-hidden">
                  <img class="img-fluid" src="img/team-2.jpg" alt=""></img>
                </div>
                <div class="team-text bg-light text-center p-4">
                  <h5>Doctor Name</h5>
                  <p class="text-primary">Department</p>
                  <div class="team-social text-center">
                    <a class="btn btn-square" href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="btn btn-square" href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a class="btn btn-square" href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="team-item position-relative rounded overflow-hidden">
                <div class="overflow-hidden">
                  <img class="img-fluid" src="img/team-3.jpg" alt=""></img>
                </div>
                <div class="team-text bg-light text-center p-4">
                  <h5>Doctor Name</h5>
                  <p class="text-primary">Department</p>
                  <div class="team-social text-center">
                    <a class="btn btn-square" href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="btn btn-square" href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a class="btn btn-square" href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div class="team-item position-relative rounded overflow-hidden">
                <div class="overflow-hidden">
                  <img class="img-fluid" src="img/team-4.jpg" alt=""></img>
                </div>
                <div class="team-text bg-light text-center p-4">
                  <h5>Doctor Name</h5>
                  <p class="text-primary">Department</p>
                  <div class="team-social text-center">
                    <a class="btn btn-square" href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="btn btn-square" href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a class="btn btn-square" href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div class="container py-5">
          <div class="row g-5">
            <div class="col-lg-3 col-md-6">
              <h5 class="text-light mb-4">Address</h5>
              <p class="mb-2">
                <i class="fa fa-map-marker-alt me-3"></i>123 Street, New York,
                USA
              </p>
              <p class="mb-2">
                <i class="fa fa-phone-alt me-3"></i>+012 345 67890
              </p>
              <p class="mb-2">
                <i class="fa fa-envelope me-3"></i>info@example.com
              </p>
              <div class="d-flex pt-2">
                <a
                  class="btn btn-outline-light btn-social rounded-circle"
                  href=""
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  class="btn btn-outline-light btn-social rounded-circle"
                  href=""
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a
                  class="btn btn-outline-light btn-social rounded-circle"
                  href=""
                >
                  <i class="fab fa-youtube"></i>
                </a>
                <a
                  class="btn btn-outline-light btn-social rounded-circle"
                  href=""
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <h5 class="text-light mb-4">Services</h5>
              <a class="btn btn-link" href="">
                Cardiology
              </a>
              <a class="btn btn-link" href="">
                Pulmonary
              </a>
              <a class="btn btn-link" href="">
                Neurology
              </a>
              <a class="btn btn-link" href="">
                Orthopedics
              </a>
              <a class="btn btn-link" href="">
                Laboratory
              </a>
            </div>
            <div class="col-lg-3 col-md-6">
              <h5 class="text-light mb-4">Quick Links</h5>
              <a class="btn btn-link" href="">
                About Us
              </a>
              <a class="btn btn-link" href="">
                Contact Us
              </a>
              <a class="btn btn-link" href="">
                Our Services
              </a>
              <a class="btn btn-link" href="">
                Terms & Condition
              </a>
              <a class="btn btn-link" href="">
                Support
              </a>
            </div>
            <div class="col-lg-3 col-md-6">
              <h5 class="text-light mb-4">Newsletter</h5>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div
                class="position-relative mx-auto"
                style={{ maxWidth: `600px` }}
              >
                <input
                  class="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                ></input>
                <button
                  type="button"
                  class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="copyright">
            <div class="row">
              <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <a class="border-bottom" href="#">
                  Your Site Name
                </a>
                , All Right Reserved.
              </div>
              <div class="col-md-6 text-center text-md-end">
                Designed By{" "}
                <a class="border-bottom" href="https://htmlcodex.com">
                  HTML Codex
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#"
        class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
      >
        <i class="bi bi-arrow-up"></i>
      </a>
    </>
  );
};