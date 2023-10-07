import React from "react";

export const Appointment = () => {
  return (
    <div>
      <div
        class="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div class="container py-5">
          <h1 class="display-3 text-white mb-3 animated slideInDown">
            Appointment
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol class="breadcrumb text-uppercase mb-0">
              <li class="breadcrumb-item">
                <a class="text-white" href="#">
                  Home
                </a>
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
                Appointment
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <p class="d-inline-block border rounded-pill py-1 px-4">
                Appointment
              </p>
              <h1 class="mb-4">Make An Appointment To Visit Our Doctor</h1>
              <p class="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <div class="bg-light rounded d-flex align-items-center p-5 mb-4">
                <div
                  class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                  style={{ width: `55px`, height: `55px` }}
                >
                  <i class="fa fa-phone-alt text-primary"></i>
                </div>
                <div class="ms-4">
                  <p class="mb-2">Call Us Now</p>
                  <h5 class="mb-0">+012 345 6789</h5>
                </div>
              </div>
              <div class="bg-light rounded d-flex align-items-center p-5">
                <div
                  class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                  style={{ width: `55px`, height: `55px` }}
                >
                  <i class="fa fa-envelope-open text-primary"></i>
                </div>
                <div class="ms-4">
                  <p class="mb-2">Mail Us Now</p>
                  <h5 class="mb-0">info@example.com</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="bg-light rounded h-100 d-flex align-items-center p-5">
                <form>
                  <div class="row g-3">
                    <div class="col-12 col-sm-6">
                      <input
                        type="text"
                        class="form-control border-0"
                        placeholder="Your Name"
                        style={{ height: `55px` }}
                      ></input>
                    </div>
                    <div class="col-12 col-sm-6">
                      <input
                        type="email"
                        class="form-control border-0"
                        placeholder="Your Email"
                        style={{ height: `55px` }}
                      ></input>
                    </div>
                    <div class="col-12 col-sm-6">
                      <input
                        type="text"
                        class="form-control border-0"
                        placeholder="Your Mobile"
                        style={{ height: `55px` }}
                      />
                    </div>
                    <div class="col-12 col-sm-6">
                      <select
                        class="form-select border-0"
                        style={{ height: `55px` }}
                      >
                        <option selected>Choose Doctor</option>
                        <option value="1">Doctor 1</option>
                        <option value="2">Doctor 2</option>
                        <option value="3">Doctor 3</option>
                      </select>
                    </div>
                    <div class="col-12 col-sm-6">
                      <div class="date" id="date" data-target-input="nearest">
                        <input
                          type="text"
                          class="form-control border-0 datetimepicker-input"
                          placeholder="Choose Date"
                          data-target="#date"
                          data-toggle="datetimepicker"
                          style={{ height: `55px` }}
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-6">
                      <div class="time" id="time" data-target-input="nearest">
                        <input
                          type="text"
                          class="form-control border-0 datetimepicker-input"
                          placeholder="Choose Date"
                          data-target="#time"
                          data-toggle="datetimepicker"
                          style={{ height: `55px` }}
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <textarea
                        class="form-control border-0"
                        rows="5"
                        placeholder="Describe your problem"
                      ></textarea>
                    </div>
                    <div class="col-12">
                      <button class="btn btn-primary w-100 py-3" type="submit">
                        Book Appointment
                      </button>
                    </div>
                  </div>
                </form>
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
                style={{ maxwidth: `400px` }}
              >
                <input
                  class="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
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
    </div>
  );
};