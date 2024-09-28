function makeCards(guideSteps, containerId) {
    const guideStepsContainer = document.getElementById(containerId);

    guideSteps.forEach((step) => {
        const card = document.createElement('div');
        card.className = 'card mt-4';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        let ul = document.createElement('ul');
        

        let imgDiv = null;
        let glideSlides = null;

        step.forEach((element, index) => {
            switch (element.type) {
                case 'title':
                    const title = document.createElement('h1');
                    title.className = 'card-title text-warning-emphasis pb-4';
                    title.textContent = element.text;
                    cardBody.appendChild(title);
                    break;

                case 'content':
                    const contentLi = document.createElement('li');
                    contentLi.textContent = element.text;
                    ul.appendChild(contentLi);

                    if (step[index + 1] && step[index + 1].type === 'link') {
                        const nestedUl = document.createElement('ul');
                        nestedUl.className = 'ps-3';

                        let i = index + 1;
                        while (i < step.length && step[i].type === 'link') {
                            const nestedLi = document.createElement('li');
                            const link = document.createElement('a');
                            link.href = step[i].href;
                            link.textContent = step[i].text;
                            link.className = 'text-decoration-none primary';
                            if (step[i].newTab) {
                                link.target = '_blank';
                            }
                            nestedLi.appendChild(link);
                            nestedUl.appendChild(nestedLi);
                            i++;
                        }
                        contentLi.appendChild(nestedUl);
                    }
                    break;

                case 'image':
                    if (!imgDiv) {
                        imgDiv = document.createElement('div');
                        imgDiv.className = 'glide';

                        const glideTrack = document.createElement('div');
                        glideTrack.className = 'glide__track';
                        glideTrack.setAttribute('data-glide-el', 'track');

                        glideSlides = document.createElement('ul');
                        glideSlides.className = 'glide__slides';
                        glideTrack.appendChild(glideSlides);

                        imgDiv.appendChild(glideTrack);
                    }

                    const glideSlide = document.createElement('li');
                    glideSlide.className = 'glide__slide';
                    const img = document.createElement('img');
                    img.src = element.src;
                    img.alt = element.alt;
                    img.className = 'img-fluid';

                    glideSlide.appendChild(img);
                    glideSlides.appendChild(glideSlide);
                    break;
            }
        });

        cardBody.appendChild(ul); // Append ul to cardBody first

        if (imgDiv) {
            // Add the indicators container
            const indicatorsDiv = document.createElement('div');
            indicatorsDiv.className = 'glide__bullets';
            indicatorsDiv.setAttribute('data-glide-el', 'controls[nav]');

            glideSlides.childNodes.forEach((slide, index) => {
                const indicator = document.createElement('button');
                indicator.className = 'glide__bullet';
                indicator.setAttribute('data-glide-dir', `=${index}`);
                indicatorsDiv.appendChild(indicator);
            });

            imgDiv.appendChild(indicatorsDiv);
            cardBody.appendChild(imgDiv); // Append imgDiv to cardBody here
        }

        const numberOfImages = glideSlides ? glideSlides.childElementCount : 0;

        if (glideSlides) {
            const glideInstance = new Glide(imgDiv, {
                type: 'carousel',
                startAt: 0,
                perView: numberOfImages < 4 ? numberOfImages : 4,
                breakpoints: {
                    768: {
                        perView: numberOfImages < 1 ? numberOfImages : 1,
                    },
                    1024: {
                        perView: numberOfImages < 2 ? numberOfImages : 2,
                    },
                },
            }).mount();

            setTimeout(() => {
                window.dispatchEvent(new Event('resize'));
            }, 100);
        }

        card.appendChild(cardBody);
        guideStepsContainer.appendChild(card);
    });
}

function createFAQ(faqs, containerId) {
    const faqContainer = document.getElementById(containerId);
    
    faqs.forEach((faq, index) => {
        // Create accordion item
        const accordionItem = document.createElement('div');
        accordionItem.className = 'accordion-item';

        // Create accordion header with button
        const accordionHeader = document.createElement('p');
        accordionHeader.className = 'accordion-header ';
        
        const button = document.createElement('button');
        button.className = 'accordion-button text-reset';
        button.type = 'button';
        button.setAttribute('data-bs-toggle', 'collapse');
        button.setAttribute('data-bs-target', `#panelsStayOpen-collapse${index}`);
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-controls', `panelsStayOpen-collapse${index}`);
        button.textContent = faq.question;
        button.style.backgroundColor = 'transparent';


        accordionHeader.appendChild(button);

        // Create accordion collapse section
        const collapseDiv = document.createElement('div');
        collapseDiv.className = 'accordion-collapse collapse';
        collapseDiv.id = `panelsStayOpen-collapse${index}`;

        const accordionBody = document.createElement('div');
        accordionBody.className = 'accordion-body';
        accordionBody.textContent = faq.answer;
       

        collapseDiv.appendChild(accordionBody);

        // Append header and collapse to accordion item
        accordionItem.appendChild(accordionHeader);
        accordionItem.appendChild(collapseDiv);

        // Append accordion item to container
        faqContainer.appendChild(accordionItem);
    });
}