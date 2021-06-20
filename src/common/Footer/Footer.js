import React, {useLayoutEffect, useRef, useEffect} from 'react'
import './Footer.scss'

function Footer() {
    const scrollTop = useRef(null)

    useLayoutEffect(() => {
        window.addEventListener("scroll", (e) => {
            if(scrollTop.current === null) return;

            if(window.scrollY > 0) scrollTop.current.classList.add("active")
            else scrollTop.current.classList.remove("active")

            scrollTop.current.addEventListener("click", (e) => {
                window.scrollTo(0,0)
            })
        })

    }, [])

    return (
        <div className="footer-contain" id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h5 className="title">Contact Us</h5>
                        <ul className="list-footer">
                            <li className="d-flex justify-content-left align-items-center"><i class="fa fa-map-marker-alt"></i><a href="">2746 Victoria  Part Avenue, Toronto, Ontario, MS2j Australia</a></li>
                            <li className="d-flex justify-content-left align-items-center"><i class="fa fa-envelope"></i><a href="">course_abc@gmail.com</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className="title">Company</h5>
                        <ul className="list-footer-company">
                            <li><a href="">About</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Press</a></li>
                            <li><a href="">Policy</a></li>
                            <li><a href="">Support</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className="title">Newsletter</h5>
                        <p className="mb-3">To subscribe to our newsletter</p>
                    </div>
                    <div className="col-md-3">
                        <h5 className="title">Contact Us</h5>
                        <p>To subscribe to our newsletter</p>
                        <form action="" className="d-flex form">
                            <input type="text" placeholder="Email here to signup" />
                            <button type="submit"><i class="fa fa-paper-plane"></i></button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="scroll-to-top" ref={scrollTop}><i class="fa fa-arrow-up"></i></div>
        </div>
    )
}

export default Footer;