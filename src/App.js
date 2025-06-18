import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import ImageCarousel from "./components/imageCarousel.js";
import Confetti from "./components/confetti"

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

//Son of Murugesan, brother of Haresh, wife of TBD. Rakesh embodies what it means to enjoy life to fullest while still pursuing excellence in academics and healing the world. I’m proud to know Rakesh and am beyond honored to be a friend of his and beyond blessed to see him succeed in life. Hope to see an Anirudh concert with him soon. 2/10



const reviews = [
  { text: "Rakesh is a pillar of the Tamil community, changing the lives of one individual at a time. Unfortunately it comes at the cost of his mental health and aura which he has failed to consider and will pay for dearly. As a result he may be cooked in some aspects of his life, yet nevertheless maintains a fun and positive outlook on life given his shortcomings as an individual. Furthermore he has excelled in both physical and academic aspects of his life, efforts of which have been proven to be futile in securing the level of happiness he hopes to one day achieve. The one commendable quality about Rakesh is that he uplifts and motivates his friends to be better, and lives as an example to us all of how much hard work combined with talent can achieve. He is a bundle of joy.", name: "Sanyog", desc: "Friend" },
  { text: "Rakesh is a one of a kind individual who carries various intrinsic qualities such as fashion, passion, and power. He has a knack for aura farming with a cheeky sense of style built for both the male and female gaze. Additionally, he has successfully fended off numerous threats to society (serial killers, bank robbers, and mad scientists) as the Indian Detective. However, while Rakesh excels in several aspects of life, he unfortunately has yet to secure a future partnership with a potential loved one. His previous attempts have proven futile, so changes must be made for the betterment of his future. Perhaps he can shift his focus from lifting weights to procuring dates instead. Either way, I hope to continue to monitor his relationship status. Overall, Rakesh possesses excellent build quality with premium materials. His friendship is everlasting and impossible to replace. Would highly recommend 👍", name: "Kunal", desc: "Friend" },
  { text: "Son of Murugesan, brother of Haresh, wife of TBD. Rakesh embodies what it means to enjoy life to fullest while still pursuing excellence in academics and healing the world. I’m proud to know Rakesh and am beyond honored to be a friend of his and beyond blessed to see him succeed in life. Hope to see an Anirudh concert with him soon. 2/10", name: "Ricky", desc: "Friend" },
  { text: "One might simply know Rakesh, but only those who truly who understand him know that he is a magician. His most well known trick is a disappearing act of wondrous proportions. First, he makes his Power of Rizz known: his muscular physique, his academic prowess, and most famously, his shirtless dancing skills to This Is America. And when the women are drawn to him, when they covet his hand in marriage… he makes it all DISAPPEAR in a flash, showing himself as a driveling Homunculus, closer to the Neanderthal species than his Sapien brethren. His second trick is one of conjuring. He begins by simply rhyming nonsensical words to a statement someone has already made, and alas, the trick is over before it has even begun! He has CONJURED pity laughter from the commoners around him. Truly worth every penny (free). 10/10.", name: "Anagh", desc: "Former-Roommate and Friend" },
  { text: "The prestigious University of Pennsylvania is home to some the greatest minds, more specifically, their medical school that hosts amazing talents from around the world and Rakesh. Today I will be critically breaking down my thoughts on this man. He has struggled with the ladies at times. He has recently discovered how to cook. He really struggles at sports not like tennis. Unfortunately those are the only bad things I can say about him. The passion that exudes from his temples (other than the copious amounts of sweat) are only matched by the lust he has for knowledge and his thirst quenching journey to doctorhood. For the passion, I must say he inspires me to rate him a 9/10", name: "Sri", desc: "Humble-er" },
  { text: "Rakesh has come a long way since the days of McGhee, or even the Doc. At first he looked like the type of guy that would choose a 918 over a LaFerrari (oh wait he is that guy), however throughout the years he has gained a cheekiness and aura that have placed him firmly in the (name one) category. Unfortunately this has not yet helped him in a few key ways that other reviewers have mentioned, but it is undeniable that he has ascended to a higher status, and he will no doubt continue ascending. He remains an inspiration to us all and a great friend and man. 9.18/10", name: "Santhusht", desc: "Life-Bro" },
  { text: "Rakesh, more widely known as Rak, keesh, frick, b8, copper, or brother, is a specimen that ought be inspected. Rak is primarily known for his physical prowess, such as when he overextended his obliques during isometric exercises. He shines a light forward for his friends, setting a strong example. Unfortunately, he often shines in the wrong direction, making a fool of himself and his brethren. Despite this, he has redeeming qualities. The diversity of his thoughts- from his views on dating abstinence to his academic pursuits in neurosurgery impress us greatly. Moreover, he is a consistent friend and family man. Ultimately, he is accepted and cherished by his friends, which yields his final rating of a 8/10", name: "Sahil", desc: "Friend" },
  { text: "Here's a 4.5-star review: Product Review: Rakesh Overall Rating: ★★★★☆ Rakesh is an outstanding performer, particularly in academics where he truly shines. While the 'dating life' feature could use some fine-tuning, it doesn't overshadow his incredible qualities as a friend and individual. A solid, highly recommended individual", name: "Shiv", desc: "Friend" },
  { text: "Used to co-write reviews of lowkey lame ass songs we thought were hard (they still kinda hit i can’t lie though) and now I get to write a review abt u…. Life comes at you quick!! 11/10 vernacular always, happy bday old man :’) ", name: "Thanvi", desc: "CCP Commute Companion" },
  { text: "has probably tried every chobani flavor on this green earth, rate: 12/10", name: "Meera", desc: "Friend" },
  { text: "Cells don’t divide, they emotionally distance” and somehow got an A+. Got close in AP Bio and he’s still my favorite lab partner in life. Catch-up convos at La Chat > therapy. Brilliant, bizarre, and better than everyone else. 12/10 🧪🥐🧠", name: "Simran", desc: "Friend" },
  { text: "Always comes prepared with entertaining lore, listening ears, and a new (odd) vocab word. Makes good chai and a fun friend to try weird food with! 12/10, would recommend to someone looking for a goofy new friend. happy bday keesh <3", name: "Nit/Dot", desc: "Friend Combo" },
  { text: "2/5 stars: you kept locking my iPad as a kid that shit was mad annoying. But now you’re cool ig🥀🥀", name: "Ryan", desc: "Kaadu Mandai" },
  { text: "Remember when we had chem lab tgt. That’s it. Happy birthday 🎈", name: "Yalini", desc: "Lab Partner" },
  { text: "I would say you are a Mass Manidhan with Cheeky Vocabulary", name: "Iniyan", desc: "Future Mass Director and 'Naa Ready' Co-Dancer" },
  { text: "Genuinely the prototype blueprint human being. Whenever someone asks me, 'Have you ever met a near perfect human Being?' I refer to Rakesh Murugesan. (I say near perfect cause he has this problem of being too humble.) Happy Birthday Brother", name: "Kadhu", desc: "Mass Glazer" },
  { text: "Cheeky mf, Happy Bday King!!", name: "Aishu", desc: "...akka for me" },
  { text: "Bro is built like a Nobel Prize Winner", name: "Vignesh", desc: "Rugby Player" },
  { text: "Probably one of the best products to ever be developed. The resilience on this specimen is unmatched as shown by his spec sheet both in processing speed and by the sheer power output in certain areas such as the gym. The only drawback in this product comes in the form of his integration with other software models, the female model specifically. But overall very solid. 4.9/5", name: "Pratham", desc: "Aka..PRAT" },
];

  return (
    <main className="relative bg-black text-white overflow-x-hidden">

      <Confetti />
      {/* --- Title --- */}
      <section className="py-12 px-6 text-center">
        <h1 className="font-kodchasan text-6xl">Happy Birthday Anna!</h1>
      </section>

      {/* --- Spline Viewer at the Top --- */}
      <div className="w-full h-[500px]">
        <spline-viewer
          url="https://prod.spline.design/ZxnCKm4kGqQlQu4i/scene.splinecode"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
        ></spline-viewer>
      </div>

      {/* --- Hero Section --- */}
      <section className="text-center py-12 px-4" data-aos="fade-up">
        <p className="text-6xl italic font-kodchasan text-gray-300">To the...</p>
        <h2 className="text-9xl font-jersey font-black font-bold mt-1 mb-6 text-white">THE ONE</h2>
        <div className="max-w-4xl mx-auto text-base font-inter leading-relaxed text-gray-300">
          <p>
            Dear Anna,<br /><br />
            Happy birthday Anna! I hope this birthday will be exciting and awesome as usual. I always have so much compliments for you at all times but its always for a reason. I always see you as some who is able to take the best parts of Dad and the best parts of Ma in one. Hanging out with you is like hanging out with both Ma and Dad. Your slow and detailed thinking always inspires me to analyze any situation I am in and your advice always gives me the confidence to handle them. I am so happy everyday with the person I have became today but you have always maintained an equal share with Mom and Dad in shaping me properly and continue to! The world has so many successful people but you will always be THE ONE with the most mass of them all! <br /><br />
            Best,<br />
            Nunu
          </p>
        </div>
      </section>

      <section className="py-12 px-6 text-center" data-aos="fade-up">
        <h1 className="text-4xl font-relative font-bold mb-6">Wait, this is a celebration right?</h1>

        <div className="flex justify-center gap-6">
          <button
            onClick={() => {
              const audio = new Audio("/theone.mp3");
              audio.play();
              window.dispatchEvent(new Event("fireConfetti"));
            }}
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
          >
            Cue some like Mass Vibes!🔉
          </button>
        </div>
      </section>

      {/* --- Moments Section --- */}
      <section className="py-12 px-6 text-white" data-aos="fade-up">
        <h3 className="text-7xl font-jersey font-bold text-center mb-8">Some of our Best Moments</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div>
            <img src="/images/cruiseanna.png" alt="Cruise with Anna" className="rounded-xl mb-2" />
            <p className="font-semibold text-white">Cruise Vibes</p>
            <p className="text-sm font-relative text-gray-300">Hanged out with "The Originals" on the vibe cruise with Santhakumar! Had so much fun exploring the ship and the beaches.</p>
          </div>
          <div>
            <img src="/images/grad.JPEG" className="rounded-xl mb-2" />
            <p className="font-semibold text-white">Grad Party</p>
            <p className="text-sm font-relative text-gray-300">Bro literally graduated from OSU just to go get cooked at UPenn daily with sum like surgical rounds.</p>
          </div>
          <div>
            <img src="/images/withma.png" className="rounded-xl mb-2" />
            <p className="font-semibold text-white">Chilling with Mommer</p>
            <p className="text-sm font-relative text-gray-300">Philly visit with some mass tasting burritos and exploring the city with Ma.</p>
          </div>
        </div>
      </section>

      {/* --- Aura-Farming Section --- */}
      <section className="py-12 px-6 flex flex-col sm:flex-row items-start gap-10 max-w-6xl mx-auto text-white" data-aos="fade-up">
        <div className="flex-1 space-y-4">
          <h3 className="text-6xl font-inter font-bold">Bro is Aura-Farming</h3>
          <p className="font-semibold text-sm text-gray-300">Mummy: </p>
          <p className="text-sm font-inter text-gray-300">Happy birthday Joeji Kutty! Thanks so much fo always making me proud and happy</p>
          <p className="font-semibold text-sm text-gray-300">Dadder's Review</p>
          <p className="text-sm font-inter text-gray-300">Happy Birthday Arrivumma! With each passing year, you're not just growing older-you're making use prouder. Wishing you all the very best in life. We pray for your good health and hope all your dreams come true.</p>
          <p className="font-semibold text-sm text-gray-300">Chithi's Review</p>
          <p className="text-sm font-inter text-gray-300">Happy Birthday Joeji, You are always tensioned, relax a little bit and chill pannu!</p>
          <div className="space-x-4 pt-4">
            <a
  href="https://youtu.be/pbICQu4cO7c?si=amvfJo7ziBifcoMJ&t=1086"
  target="_blank"
  rel="noopener noreferrer"
  className="ml-4 border border-white px-4 py-2 rounded text-white hover:bg-white hover:text-black transition"
>
  Surprise ahh?
            </a>
          </div>
        </div>
        <div className="flex-1">
          <img src="/images/aurafarming.png" className="rounded-2xl shadow-lg" />
        </div>
      </section>

      {/* --- Reviews Section --- */}
      <section className="py-16 px-6 text-white" data-aos="fade-up">
  <h3 className="text-6xl font-bold  font-jersey text-center mb-8">Reviews on your mass-factor...</h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {reviews.map((review, i) => (
      <div key={i} className="p-4 border border-gray-600 rounded-lg shadow-md bg-gray-800 space-y-2">
        <p className="text-sm font-medium text-white">"{review.text}"</p>
        <div className="pt-2">
          <p className="text-sm font-semibold text-white">{review.name}</p>
          <p className="text-xs text-gray-400">{review.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>

    <section className="py-12 px-6">
  <h2 className="text-6xl font-bold mb-6 text-white font-kodchasan text-center">Our Memories</h2>
  <ImageCarousel />
</section>
    </main>
  );
}
