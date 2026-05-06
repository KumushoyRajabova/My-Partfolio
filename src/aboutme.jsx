import Kumushoy from './assets/programmergirl.jpg'
import './aboutme.css'

function AboutMe(){
    return(
        <div id='aboutme_box'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div className="aboutme_img">
                <img src={Kumushoy}/>
            </div>
            <div className="aboutme_text">
                <h2>Salom, mening ismim Kumushoy🤚</h2>
                <h3>💻 Web dasturchi bo'lish yo'lida harakat qilayotgan o'quvchiman</h3>
                <p>🌐 HTML, CSS, JavaScript, React bilan ishlayman</p>
                <p>👩‍🏫 Pythondan o'quvchilarga dars beraman</p>
                <p>🚀 Maqsadim — kuchli Full Stack Developer bo'lish</p>
                <p>📚 Kitoblar — mening fikrlashimni shakllantiradi, kod esa kelajagimni.</p>
                <p>🎧 Musiqa — ruhim uchun, dasturlash — kelajagim uchun.</p>
                <p>🌍 Kelajakda Turkiyada o'qishni rejalashtirganman</p>
                <p>📧 rajabovakumush0@gmail.com</p>
                <i class="fa-brands fa-facebook-f"></i>
                <a href="https://www.instagram.com/kumushoy_rajabova"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://github.com/KumushoyRajabova"><i class="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav"><i class="fa-brands fa-linkedin-in"></i></a>
                <i class="fa-brands fa-twitter"></i>
            </div>
        </div>
    )
}

export default AboutMe