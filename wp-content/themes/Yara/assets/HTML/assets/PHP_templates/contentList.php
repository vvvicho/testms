<section id="contentList_001" class="bgColors--sectionLight">
<link rel="preload" as="image" href="../HTML/assets/images/slider/fetizerOptimize_1.webp?z=11" />
<link rel="preload" as="image" href="../HTML/assets/images/slider/fetizerOptimize_2.webp?z=11" />
<link rel="preload" as="image" href="../HTML/assets/images/slider/fetizerOptimize_3.webp?z=11" />
            <div class="warper">
                <div class="item_12">
                    <h3>How can Atfarm help optimise your fertiliser strategy?</h3>
                </div>
                <figure class="item_7">
                    <img src="../HTML/assets/images/slider/fetizerOptimize.webp?z=11" width="677" height="508" alt="my image">
                </figure>
                <div class="articleInfo item_5">
                    <div class="articleContent">
                        <h4>Optimise nitrogen use efficiency</h4>
                        <p>Improve crop growth and evenness by utilising the in-field measurements for variable nitrogen
                            applications. </p>
                        <div class="button button-dark">
                            Sign up
                        </div>
                    </div>
                </div>
                <div class="item_12 articleNavigation">
                    <div id="contentList_001_left" class="icons icons-navLeft"></div>
                    <div id="contentList_001_right" class="icons icons-navRight"></div>
                </div>
            </div>

            <script>

                let dataArticleContainer = [];
                let currentitem = 0;
                let sectionData = document.getElementById("contentList_001");
                let sectionDataSubTitle = sectionData.querySelector("h4");
                let sectionDataImage = sectionData.querySelector("figure img");
                let sectionDataContent = sectionData.querySelector("p");


                function slideLeftRight(direction) {
                    let maxObjects = dataArticleContainer.length;
                    console.log(maxObjects);
                    currentitem += direction;
                    if (currentitem < 0 ){

                        currentitem = maxObjects -1;

                    }else if (currentitem >= maxObjects ) {
                        currentitem = 0;

                    }

                    console.log(currentitem);

                    sectionDataSubTitle.innerHTML = dataArticleContainer[currentitem].subtitle;
                    sectionDataContent.innerHTML = dataArticleContainer[currentitem].content;
                    sectionDataImage.setAttribute("src",dataArticleContainer[currentitem].image);


                }

                let slideLeftButton = document.getElementById("contentList_001_left");
                let slideRightButton = document.getElementById("contentList_001_right");

                slideLeftButton.onclick = function() {
                    slideLeftRight(-1);
                };

                slideRightButton.onclick = function() {
                    slideLeftRight(1);
                };


                dataArticleContainer[0] = 
                {
                    image: "../HTML/assets/images/slider/fetizerOptimize.webp?z=11",
                    subtitle: "Optimise nitrogen use efficiency ",
                    content: "Improve crop growth and evenness by utilising the in-field measurements for variable nitrogen applications."
                };
                dataArticleContainer[1] = 
                {
                    image: "../HTML/assets/images/slider/fetizerOptimize_1.webp?z=11",
                    subtitle: "Measure N-demand ",
                    content: "Analyse your crop throughout the season with accurate nitrogen uptake values captured by N-Photo analysis and the N-Tester BT device."
                };
                dataArticleContainer[2] = 
                {
                    image: "../HTML/assets/images/slider/fetizerOptimize_2.webp?z=11",
                    subtitle: "Create a holistic Nutrition Plan ",
                    content: "Start every season with Nutrition Planning that gives you more than just calculations. Get the nutrition insights you need to reach your yield goals. "
                };
                dataArticleContainer[3] = 
                {
                    image: "../HTML/assets/images/slider/fetizerOptimize_3.webp?z=11",
                    subtitle: "Track crop growth",
                    content: "Use Atfarm to measure biomass on your fields throughout the season. Satellite technology and Yara’s extensive agronomic expertise keep you informed on the progress of your crops."
                };

            </script>




        </section>