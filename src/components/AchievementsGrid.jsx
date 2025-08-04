import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';  // Import React Slick

export default function AchievementsGrid({ achievements }) {
  // Slider settings for React Slick
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    autoplay: false,   // set true if you want automatic sliding
    autoplaySpeed: 4000,
  };

  return (
    <div className="flex flex-col gap-16">
      {achievements.map((achievement, idx) => {
        const left = idx % 2 === 0;

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } }
};
// ... use initial='hidden' for fade-in only


        // Use images array if available, fallback to single image array
        const images = achievement.images && achievement.images.length > 0
          ? achievement.images
          : achievement.image
          ? [achievement.image]
          : [];

        return (
          <motion.div
            key={achievement.id}
            className={`flex flex-col md:flex-row items-center ${left ? '' : 'md:flex-row-reverse'}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={variants}
          >
            <div className="md:w-1/2 p-6 flex justify-center">
  {images.length > 1 ? (
    <div className="rounded-lg shadow-2xl border-4 border-emerald-300 w-72 ">
      <Slider {...sliderSettings}>
        {images.map((img, i) => (
          <div key={i}>
            <img
              src={img}
              alt={`${achievement.title} screenshot ${i + 1}`}
              className="rounded-lg object-cover max-h-74 mx-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  ) : images.length === 1 ? (
    <img
      src={images[0]}
      alt={achievement.title}
      className="rounded-lg shadow-2xl w-73 h-72 object-cover border-4 border-emerald-300"
    />
  ) : (
    <div className="w-72 h-72 bg-gray-700 flex items-center justify-center rounded-lg text-gray-300">No Image</div>
  )}
</div>

            <div className="md:w-1/2 p-6 flex flex-col gap-3">
              <h3 className="text-2xl font-bold text-emerald-300">{achievement.title}</h3>
              <p className="text-gray-200">{achievement.description}</p>
              <span className="bg-emerald-400 text-indigo-900 px-4 py-1 mt-2 rounded-full font-semibold w-max shadow">
                {achievement.year}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
