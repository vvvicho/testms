<section id="contentSlider" class="bgColors--sectionLight">
    <style>
        #sliderContent_0001 {
            scroll-behavior: smooth;
            transition: 0.25s;
            overflow: hidden;
        }
    </style>
    <div class="warper">
        <h3 class="item_12">21,000+ Farmers and agronomists already use Atfarm</h3>
        <div id="sliderContent_0001" class="slider item_12">
            <ul>
                <li>
                    <p>“Atfarm is very simple to use, taking just 10 mins to load all my field boundaries over
                        the 2200 hectares of farming.</p>
                    <p>I like to use satellite imagery to scout for any management issues.</p>
                    <p>The maps are a very visual way of picking out differences in growth and development to
                        help prioritise decisions.”</p>
                    <p class="flafIcons flafIcons--uk">Jorin Grimsdale, Farmer, UK</p>
                </li>
                <li>
                    <p>“Nitrogen Use Efficiency is one of the most significant challenges mankind faces if we are to reduce carbon and nutrient emissions, yet feed a growing global population.</p>
                    <p>The Yara N-Tester is a valuable and practical tool for farmers to use, backed by decades of research results, to improve efficiency.”</p>

                    <p class="flafIcons flafIcons--uk">Dr Alastair Leake Director of Policy at the Game & Wildlife Conservation Trust, UK</p>
                </li>
                <li>
                    <p>“It's much better than the solutions that we saw in the past, and we also can see the field from above and identify problematic areas or that have some deficiencies.”</p>

                    <p class="flafIcons flafIcons--it">Fabiano Paganella Agronomist, Italy</p>
                </li>
                <li>


                    <p>“If you want to take the first step towards precision agriculture, feel free to test to create simulations on Atfarm. This will allow you to understand the potential of this tool.”</p>
                    <p class="flafIcons flafIcons--fr">Remy Dumery, Farmer, France</p>
                </li>
                <li>
                    <p>“Atfarm is very simple to use, taking just 10 mins to load all my field boundaries over
                        the 2200 hectares of farming.</p>
                    <p>I like to use satellite imagery to scout for any management issues.</p>
                    <p>The maps are a very visual way of picking out differences in growth and development to
                        help prioritise decisions.”</p>
                    <p class="flafIcons flafIcons--uk">Jorin Grimsdale, Farmer, UK</p>
                </li>
                <li>
                    <p>“Nitrogen Use Efficiency is one of the most significant challenges mankind faces if we are to reduce carbon and nutrient emissions, yet feed a growing global population.</p>
                    <p>The Yara N-Tester is a valuable and practical tool for farmers to use, backed by decades of research results, to improve efficiency.”</p>

                    <p class="flafIcons flafIcons--uk">Dr Alastair Leake Director of Policy at the Game & Wildlife Conservation Trust, UK</p>
                </li>
                <li>
                    <p>“It's much better than the solutions that we saw in the past, and we also can see the field from above and identify problematic areas or that have some deficiencies.”</p>

                    <p class="flafIcons flafIcons--it">Fabiano Paganella Agronomist, Italy</p>
                </li>
                <li>


                    <p>“If you want to take the first step towards precision agriculture, feel free to test to create simulations on Atfarm. This will allow you to understand the potential of this tool.”</p>
                    <p class="flafIcons flafIcons--fr">Remy Dumery, Farmer, France</p>
                </li>







            </ul>
        </div>
        <div class="item_12 articleNavigation">
            <div id="contentSlider_001_left" class="icons icons-navLeft"></div>
            <div id="contentSlider_001_right" class="icons icons-navRight"></div>
        </div>
        <div class="item_12 buttonHolder">
            <div class="button button-dark">
                Sign up
            </div>
        </div>
    </div>
    <script>
        let contentSlider = document.getElementById("sliderContent_0001");
        let contentSliderItemsHolder = contentSlider.querySelector("ul");

        let contentSlideLeftButton = document.getElementById("contentSlider_001_left");
        let contentSlideRightButton = document.getElementById("contentSlider_001_right");



        function getOffset(el) {
            var rect = el.getBoundingClientRect();
            return {
                left: rect.left + window.pageXOffset,
                top: rect.top + window.pageYOffset
            };
        }



        function contentSlideLeftRight(direction) {
            console.log(direction);
            let containerWidth = contentSlider.offsetWidth;
            let containerItemsHolderWidth = contentSliderItemsHolder.offsetWidth;
            let itemWidth = contentSliderItemsHolder.querySelector("li").offsetWidth;
            console.log(containerWidth + " , " + containerItemsHolderWidth);
            var rect = contentSliderItemsHolder.getBoundingClientRect();
            console.log(contentSlider.scrollLeft, rect.y, rect.bottom, itemWidth);
            let step = itemWidth;
            let newPosition = (contentSlider.scrollLeft + (step * direction));
            contentSlider.scrollLeft = newPosition;
        }





        contentSlideLeftButton.onclick = function() {
            contentSlideLeftRight(-1);
        };

        contentSlideRightButton.onclick = function() {
            contentSlideLeftRight(1);
        };
    </script>
</section>