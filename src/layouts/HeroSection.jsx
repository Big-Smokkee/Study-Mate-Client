import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
const HeroSection = ({ slidesData }) => {
    console.log(slidesData);
    return (
        <div>
            <Swiper
                modules={[Pagination, Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                className="pb-12"
            >
                {slidesData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="py-6">
                            {/* Hero Main Headline */}
                            <h1 className="text-4xl md:text-6xl font-black text-center tracking-tight mb-10 text-base-content">
                                {slide.title}
                            </h1>

                            {/* 3 Column Grid Layout matching design */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                                {/* Left Column: Features List */}
                                <div className="lg:col-span-3 space-y-6 order-2 lg:order-1">
                                    <h3 className="text-lg font-bold border-b border-base-300 pb-2 text-base-content">Key Features</h3>
                                    {slide.features?.map((feat, idx) => (
                                        <div key={idx} className="flex gap-3 items-start bg-base-200/60 p-3 rounded-lg border border-base-300 shadow-sm">
                                            <div className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0">
                                                0{idx + 1}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-sm text-base-content">{feat.name}</h4>
                                                <p className="text-xs text-base-content/70 mt-1">{feat.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Center Column: Hero Card Image */}
                                <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
                                    <div className="relative w-full max-w-md h-95 rounded-2xl overflow-hidden shadow-xl border-4 border-base-100 bg-base-300">
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                                    </div>
                                </div>

                                {/* Right Column: Purpose & CTA & Stats */}
                                <div className="lg:col-span-4 space-y-6 order-3">
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-base-content">{slide.rightTitle}</h3>
                                        <p className="text-sm text-base-content/80 leading-relaxed">{slide.rightDesc}</p>
                                    </div>

                                    <button className="btn btn-primary px-6 text-sm font-medium shadow-md">
                                        {slide.buttonText}
                                    </button>

                                    {/* Statistics Footer */}
                                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-base-300">
                                        {slide.stats?.map((stat, sIdx) => (
                                            <div key={sIdx}>
                                                <div className="text-xl font-black text-base-content">{stat.value}</div>
                                                <div className="text-xs text-base-content/60 mt-0.5">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroSection;