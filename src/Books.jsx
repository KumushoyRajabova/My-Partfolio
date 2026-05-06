import Booksprops from "./Booksprops"
import Hakan from "./assets/hakanmenguc.jpg"
import "./Books.css"

function Books(){
    return(
        <div id="books">
            <Booksprops
            bookimg={Hakan}
            bookname="Qalbing pok bo'lsa hikoyang baxtli yakun topadi"
            author="Hakan Menguc"
            about="Kitobdan olganlarim shuki inson o'zini borligicha xatolari bilan qabul qila olishi va 
            bu hayotda xato qilmaydigan inson bo'lmasligini aytgan. Ammo qilgan xatosidan dars olib 
            bilgangina omadli ekanligi yozilgan. Kitobda ba'zi bir insonlarni 'axlat mashinasi'
            ga o'xshatgan. Sababini so'rasangiz o'sha insonlar qalbida kimdandir qolgan g'azab, nafrat, 
            kin, umidsizlik kabi hislarni saqlagani uchun yozuvchi ularni 'axlat mashinasi'ga o'xshatgan. 
            Har doim qarshimizdan bir xil insonlar chiqadi. Doim ularga keragidan ortiq ishonch beramiz va 
            oxirida ham afsus qilgan o'zimiz bo'lamiz. O'ziga ishongan insonlardan bo'lish, kibir va 
            xudbinlikdan uzoq aksincha o'z  qadrini faqrlay olish bilan bog'liq bir kuch...
            Har doim kelajakdagi insonimiz haqida orzu qilamiz. Savol: 'Siz orzu qilgan insonga o'zingizni 
            ravo ko'rasizmi?' 
            Siz orzu qilgan insoningiz kabi bo'ling!
            Yana asosiylaridan 'Yo'q' deyishni o'rganish. "/>
        </div>
    )
}

export default Books