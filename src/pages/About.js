import AuthorImage from "../static/Recovered_JPEG Digital Camera_24059......jpg";
import Pic1 from "../static/Picture1.jpg";
import Pic2 from "../static/Picture2.jpg";
import Pic3 from "../static/Picture3.jpg";
import Pic4 from "../static/Picture4.jpg";
import Pic5 from "../static/Picture6.jpg";
import Pic6 from "../static/Picture7.jpg";
import Pic7 from "../static/Picture8.jpg";
import Pic8 from "../static/Picture9.jpg";
import Pic9 from "../static/Picture10.jpg";
import Pic10 from "../static/Picture11.jpg";
import Pic11 from "../static/Picture12.jpg";
import Pic12 from "../static/20200924_150143.jpg";
import Pic13 from "../static/Picture13.jpg";
import Pic14 from "../static/Picture14.jpg";
import Pic15 from "../static/Picture15.jpg";
import AboutImageContainer from "../components/AboutImageContainer";

const About = () => {
    return (
        <div className="about">
            <div className="about__container">
                <div className="about__intro">
                    <div className="about__intro__image">
                        <img src={AuthorImage} alt="author" />
                    </div>
                    <div className="about__intro__details">
                        <p>Fahimeh Heydari</p>
                    </div>
                </div>
                <div className="about__content">
                    <p>Designing and making functional objects has always been my passion. The functional identity of ceramic is oldest role that this material has played in human life. I have been doing this for the last 14 years more than anything.</p>
                    <AboutImageContainer images={[Pic1 , Pic2]} desc="Table ware, bisque and glaze firing temp: 1100° C" />
                    <p>Applied ceramics permanently have been interesting to me in term of form, color and texture. I have used the contrast of these fine ceramics with other textures in some installations. </p>
                    <AboutImageContainer imageStyle={{ maxWidth : 520 }} images={[Pic3]} />
                    <AboutImageContainer desc="“These are not bowls”, Decal printed ceramic bowls on high fired stone ware pieces, 2017, 7.International Golcuk Ceramic Symposium, Kocaeli, Turkey" images={[Pic4 , Pic5]} />
                    <p>In recent years, I have benefited from alternative firing techniques such as saggar and raku for producing the functional ceramics. I have found these techniques useful for the presence of ceramics in the contemporary life style. I have awarded of excellence for handicrafts national program by Heritage Culture and Handicrafts Ministry of Iran in 2015 and 2019 for producing these functional ceramics.</p>
                    <AboutImageContainer desc="Saggar fired vessels, inside of vessels are glazed to make them completely functional" images={[Pic6 , Pic7]} />
                    <AboutImageContainer desc="Horse hair and obvara raku fired vessels, bisque and glaze firing temp: 1100°C, various raku firing temperatures" images={[Pic8 , Pic9]} />
                    <p>I’m highly inspired by ancient pottery in terms of producing methods, firing techniques and specifically the way of looking at the functional objects. In my master project, I used zoomorphic rhyton forms, which were a kind of ritual utensils in the first millennium BC in Iran. By adding movement to the static form of these rhytons, I created a collection of sculptures. I have awarded the third place for creativity and innovation in arts and crafts in 3. Tabriz International Festival for Islamic Arts and Crafts IRCICA in Iran in 2017 for this collection.   </p>
                    <AboutImageContainer desc="Migration, terrasigillata covered terracotta. Collection of 7pcs, Each piece 20×50×40 CM" imageStyle={{ maxWidth : 520 }} images={[Pic10]} />
                    <p>I use some ancient methods that were common in the Iron Age to make contemporary functional utensils. For this purpose, I have researched the local soils for making terrasigillata and the updated techniques for smoke firing ceramics. These candle holders have exhibited in my first solo show at Glassware and Ceramic Museum of Iran in 2021. </p>
                    <AboutImageContainer desc="Smoke fired candle holders, bisque firing temp: 1100°C, smoke firing temp: 650°C" imageStyle={{ maxWidth : 520 }} images={[Pic11]} />
                    <p>The aesthetics of Iranian art, especially in the Islamic centuries, is based on the philosophic concept of “unity of plurality”, which is reflected in the architectural proportions and relative geometric decorative patterns. A concept that has enriched Iranian traditional architecture and crafts with the “symmetry and repetition” of geometric patterns.I have made my recent collection "Harmony and Contrast'', that have been exhibited at Vista Art Gallery in Tehran in 2021 is influenced by this concept.</p>
                    <AboutImageContainer desc="Vessel, Harmony and Contrast series, wheel worked and carved, bisque and glaze firing temp:1100°C, smoke firing temp:650°C, 23×23×31CM, 2019" imageStyle={{ maxWidth : 520 }} images={[Pic12]} />
                    <p>The architectural proportions of the columns and domes covered with symmetric and repetitive geometric patterns have been a source of inspiration for me.</p>
                    <AboutImageContainer desc="Vessel, wheel worked and carved, brown clay, bone fired at 1100°C, 42×42×21CM, 2019" imageStyle={{ maxWidth : 520 }} images={[Pic13]} />
                    <p>My expected symmetry is simply achieved by rotating the curved lines around an axis: sometimes a simple curved line and sometimes multiple curved lines. The picture below is my work that have selected for Latvian International Ceramic Biennale in 2021. </p>
                    <AboutImageContainer desc="Untitled, wheel worked and hand engraved, bisque firing temp:1100°C, glaze and saggar firing temp:1100°,23×23×55, 2020" imageStyle={{ maxWidth : 520 }} images={[Pic14]} />
                    <p>Sometimes I fill the whole surface and sometimes part of it with symmetrical and repetitive patterns. The harmony and contrast of the matte and unglazed engraved surfaces beside the plain and shiny surfaces that are achieved by raku firing, is for me like vicissitudes of contemporary human life.The picture below is my work that have selected for Korean International Ceramic Biennale in 2021. </p>
                    <AboutImageContainer desc="Geometric Ballad, raku fired and bone fired brown stoneware, 90×70×50 cm" imageStyle={{ maxWidth : 520 }} images={[Pic15]} />
                    <p>
                        {`FAHIMEH HEYDARI
                        1983, Urmia, Iran
                        Education
                        2014   9 Eylul University, Fine Art Faculty, MA Ceramic Design, Izmir, Turkey
                        2007   Islamic Art University, BA Handy crafts, Tabriz, Iran
                        Awards
                        2019 and 2015   Award of Excellence for Handicrafts National Programme, Iran
                        2017   Third place award for Creativity and Innovation in Arts and Crafts, 3. Tabriz International Festival for Islamic Arts and Crafts IRCICA, Iran 
                        International Events 
                        2021   Korea International Ceramic Biennale, Geyonggy Museum, South Korea
                        2021   Latvia International Ceramic Biennale, Daugavpils, Latvia
                        2014-2019   1-6. International Mediterranean Terracotta symposium, Cyprus
                        2017   7. International Golcuk Ceramic Symposium, Kocaeli, Turkey
                                3.Tabriz International Festival for Islamic Arts, Crafts and Creativity, Iran
                        Group Exhibitions
                        2021   Flower time, ceramic group exhibition, Vista art gallery, Tehran, Iran
                        2019 and 2018   2. and 3. Fajr Festival for Traditional Arts and Crafts, Tehran, Iran
                        2016   14. Golden Pitcher Ceramic Contest, Turkey
                        2013 and 2012   3. and 4. International Gizem Frit Ceramic Competition, Turkey
                        Solo exhibitions
                        2021   The Light, solo exhibition, Glassware and Ceramic Museum of Iran, Tehran
                        2021    Harmony and Contrast, Vista Art Gallery, Tehran  
                        Collections  
                        Akdeniz Terracotta sculptures Open Air Museum, Cyprus 
                        Experiences
                        2007- present     working as a designer and producer in private studio
                        Publications 
                        Translation from Turkish to Persian of the book Terrasigillata, Sevim Cizer
`}
                    </p>

                </div>
            </div>
        </div>
    )
}


export default About;