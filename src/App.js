/*

  Your app must include:
  - useState
  - Event handling
  - At least 2 buttons
  - User input (for some apps)
  - Conditional rendering
  - Clean UI

*/
import Card from "./components/Card";

const POSTS = [
  {
    title: "Introduction to Our Platform",
    desc: "Discover the core features and benefits of our platform designed to enhance your productivity and streamline your workflow.",
    likes: 12,
  },
  {
    title: "Getting Started Guide",
    desc: "Learn how to set up your account and begin using our services with this comprehensive step-by-step guide.",
    likes: 25,
  },
  {
    title: "Latest Updates",
    desc: "Stay informed about the newest features, improvements, and updates we’ve recently introduced.",
    likes: 18,
  },
  {
    title: "Best Practices",
    desc: "Explore recommended strategies and techniques to maximize efficiency and achieve optimal results.",
    likes: 30,
  },
  {
    title: "User Experience Enhancements",
    desc: "A closer look at the improvements we’ve made to ensure a smoother and more intuitive user experience.",
    likes: 22,
  },
  {
    title: "Security and Privacy",
    desc: "Understand how we protect your data and maintain high standards of security and confidentiality.",
    likes: 15,
  },
  {
    title: "Tips and Tricks",
    desc: "Unlock hidden features and useful shortcuts to make the most out of our platform.",
    likes: 40,
  },
  {
    title: "Case Studies",
    desc: "Read real-world examples of how our solutions have helped users achieve their goals.",
    likes: 27,
  },
  {
    title: "Community Highlights",
    desc: "Engage with stories, feedback, and contributions from our growing community.",
    likes: 19,
  },
  {
    title: "Support and Resources",
    desc: "Access helpful documentation, FAQs, and customer support options whenever you need assistance.",
    likes: 14,
  },
  {
    title: "Future Roadmap",
    desc: "Get insights into upcoming features and our long-term vision for continuous improvement.",
    likes: 33,
  },
  {
    title: "Contact and Feedback",
    desc: "Reach out to us with your questions, suggestions, and feedback to help us serve you better.",
    likes: 9,
  },
];

export default function App() {
  return (
    <div>
      <h2 className="text-green-600">ITPS205 Show/Hide Content App</h2>
      <p>Group 3</p>
      <Card
        title="Title"
        desc="Description"
      />
    </div>
  );
}
