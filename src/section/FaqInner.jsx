import React, { useState } from "react";

const leftFaqs = [
  {
    question: "What warranties do I have for installation?",
    answer:
      "Reduce, reuse, and recycle: This is a classic but effective way to reduce waste and conserve resources. Try to use reusable bags, containers, and water bottles, and recycle items that can't be reused.",
  },
  {
    question: "What is included in your services?",
    answer:
      "There are many variations of passages of available, but the majority have suffered alteration in some form.",
  },
  {
    question: "What are the payment methods?",
    answer:
      "There are many variations of passages of available, but the majority have suffered alteration in some form.",
  },
  {
    question: "How fast I get my order?",
    answer:
      "There are many variations of passages of available, but the majority have suffered alteration in some form.",
  },
];

const rightFaqs = [
  {
    question: "Produce Your Own Clean Save The Environment",
    answer:
      "Reduce, reuse, and recycle: This is a classic but effective way to reduce waste and conserve resources. Try to use reusable bags, containers, and water bottles, and recycle items that can't be reused.",
  },
  {
    question: "On-Site Service And Support For Certification",
    answer:
      "On-site service and support for certification refers to the assistance provided to companies or organizations that are seeking certification for their products, services, or processes. This assistance can include everything from helping companies understand the certification requirements to providing on-site training and support during the certification process.",
  },
  {
    question: "Light Source For Stable Conversion Efficiency",
    answer:
      "In the context of solar energy, a light source for stable conversion efficiency refers to a source of light that provides a consistent and predictable output, which can be used to test and optimize the performance of solar cells and panels. This is important because the efficiency of solar cells and panels can vary depending on the intensity and wavelength of the light they receive, so it is crucial to use a stable light source to ensure accurate and reliable measurements.",
  },
  {
    question: "Do You Give Guarantee And After Sales Service?",
    answer: [
      "As an AI language model, I do not provide products or services, so I do not offer guarantees or after-sales service. However, many companies that offer products or services do provide guarantees and after-sales service to their customers.",
      "Guarantees are a form of assurance that a product or service will meet certain expectations or standards, and if they don't, the company will either repair or replace the product or provide a refund. Guarantees can vary depending on the product or service, and may be limited by certain terms and conditions.",
    ],
  },
];

const Accordion = ({
  items,
  defaultActive = 0,
  extraClass = "",
  itemClass = "",
  buttonClass = "",
  contentClass = "",
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultActive);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <ul className={`accordion-box style-two ${extraClass}`}>
      {items.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <li
            key={index}
            className={`accordion block ${itemClass} ${
              isActive ? "active-block" : ""
            }`}
          >
            <div
              className={`acc-btn ${buttonClass} ${
                isActive ? "active" : ""
              }`}
              style={{
                color: "var(--theme-color-black)",
                fontSize: "18px",
                cursor: "pointer",
              }}
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
              <div className="icon fa-solid fa-plus" />
            </div>

            <div
              className={`acc-content ${contentClass} ${
                isActive ? "current" : ""
              }`}
            >
              <div className="content">
                {Array.isArray(item.answer) ? (
                  item.answer.map((text, i) => (
                    <div key={i} className="text">
                      {text}
                    </div>
                  ))
                ) : (
                  <div className="text">{item.answer}</div>
                )}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const FAQSectionHomeOne = () => {
  return (
    <section className="faqs-section-home1 mt-0 pt-120 pb-100 pb-md-20">
      <div className="auto-container">
        <div className="row">
          {/* Left FAQ Column */}
          <div className="faq-column col-lg-6">
            <div className="inner-column">
              <Accordion
                items={leftFaqs}
                extraClass="wow fadeInLeft"
              />
            </div>
          </div>

          {/* Right FAQ Column */}
          <div className="faq-column col-lg-6">
            <div className="inner-column mb-md-50">
              <Accordion
                items={rightFaqs}
                extraClass="bg-transparent p-0 wow fadeInLeft"
                itemClass="pl-30 pr-30"
                buttonClass="border-bottom-0"
                contentClass=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSectionHomeOne;