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
        <div className="footer-contain">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h5 className="title">Contact Us</h5>
                        <ul className="list-footer">
                            <li><a href="">Course</a></li>
                            <li><a href="">Course</a></li>
                            <li><a href="">Course</a></li>
                            <li><a href="">Course</a></li>
                            <li><a href="">Course</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className="title">Company</h5>
                        <ul className="list-footer">
                            <li><a href="">Course</a></li>
                            <li><a href="">Course</a></li>
                            <li><a href="">Course</a></li>
                            <li><a href="">Course</a></li>
                            <li><a href="">Course</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className="title">Newsletter</h5>
                        <p>To subscribe to our newsletter</p>
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