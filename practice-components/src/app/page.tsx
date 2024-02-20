import Image from "next/image";
import AccordionWrapper from "./components/AccordionWrapper";
import Recipe from "./components/recipe-page";
import Newsletter from "./components/newsletter";

const faqItems = [
  {
    title: "Who is Pookiemonster?",
    content:
      "Pookiemonster is this little guy that just cruises about the place being really nice.",
  },
  {
    title: "Will I like Pookiemonster?",
    content:
      "It's more likely than not that you'll like Pookiemonster cuz he's just a really great little guy.",
  },
  {
    title: "What does Pookiemonster look like?",
    content:
      "Pookiemonster has this great little face with nice big brown eyes and a cheeky little smile. He's also instantly recognisable by his little round belly",
  },
  {
    title: "So, is Pookiemonster nice or what?",
    content: "BLOODY RIGHT HE IS CAP!",
  },
  // ... Add other items
];

export default function Home() {
  return (
    <div className="bg-purple-50 min-h-screen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1440"
        height="320"
        fill="none"
        viewBox="0 0 1440 320"
      >
        <g clip-path="url(#a)">
          <path fill="#301534" d="M0 0h1440v320H0z" />
          <path
            stroke="#AD28EB"
            stroke-linecap="round"
            stroke-width="3"
            d="M-676-182C-454-10-396.863 71.888-197.5 143.5-99 178.882-36.919 170.726-4.751 170.108c104.487-2.01 204.609-43.237 298.633-85.495 38.354-17.238 75.882-36.189 112.063-57.63 23.903-14.165 58.87-33.913 64.721-64.42 2.32-12.102-16.369-12.24-23.771-9.789-13.511 4.474-25.95 16.544-36.056 25.669-19.131 17.273-37.062 35.948-53.235 56.031-33.728 41.883-68.034 100.247-34.158 152.014 17.287 26.415 43.94 45.693 72.112 59.127 56.182 26.791 119.205 38.742 180.778 44.146 164.438 14.432 328.964-3.461 483.004-63.622 79.76-31.148 158.55-70.539 224.23-126.245 48.56-41.186 102.8-96.548 110.66-162.9 10.93-92.187-94.04-136.062-169.29-148.418-61.41-10.084-123.75-4.164-184.07 9.588-78.262 17.84-149.006 47.67-214.241 94.384-130.002 93.093-234.95 228.413-272.466 385.827-15.64 65.625-16.648 138.21 5.493 202.551 21.452 62.338 69.196 110.576 124.048 144.923 65.117 40.774 137.161 62.14 212.839 73.21 100.474 14.696 202.817 12.233 303.027-2.997 176.17-26.772 352.73-88.431 505.18-181.077 103.22-62.725 199.3-134.15 280.06-224.425 17.7-19.793 31.81-40.875 43.74-64.521C2172.11-58.5 2095.5-145.528 2095.5-151"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h1440v320H0z" />
          </clipPath>
        </defs>
      </svg>

      <div className="-mt-20 mb-20 flex flex-row w-full items-center justify-center p-4">
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h1 className="flex flex-row  text-4xl font-extrabold text-black mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="41"
              fill="none"
              viewBox="0 0 40 41"
              className="mr-4"
            >
              <path
                fill="#AD28EB"
                d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z"
              />
            </svg>
            FAQs
          </h1>
          <AccordionWrapper items={faqItems} />
        </div>
      </div>
      <section>
        <div>
          <Recipe />
        </div>
      </section>
      <section>
        <Newsletter />
      </section>
    </div>
  );
}
