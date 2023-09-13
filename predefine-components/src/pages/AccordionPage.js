
// Aka expandable list view
import Accordion from "../mcomponents/Accordion";

function AccordionPage() {
    const items = [
        {
            id: 10001,
            title: "Product Features",
            content: "Explore the outstanding features of our product, from seamless integration to unparalleled user customization. Learn how our product can transform your business."
        },
        {
            id: 10002,
            title: "Customer Testimonials",
            content: "Read what our satisfied customers have to say about their experiences. Discover how our product has helped them achieve their goals and exceed expectations."
        },
        {
            id: 10003,
            title: "Industry Insights",
            content: "Stay updated with the latest trends and insights in your industry. Our expert analysis and in-depth research will keep you well-informed and ahead of the curve."
        },
        {
            id: 10004,
            title: "Support and Resources",
            content: "Access a wealth of resources, including tutorials, FAQs, and dedicated support. We're here to assist you every step of the way on your journey to success."
        },
        {
            id: 10005,
            title: "Company News and Updates",
            content: "Get the latest news and updates from our company. Stay informed about upcoming events, product launches, and exciting developments in our organization."
        }
    ];

    return <div>
        <Accordion items={ items }/>
    </div>;
}

export default AccordionPage;