import { testimonials } from "../../../constants";
import GlowCard from "../GlowCard";
import TitleHeader from "../TitleHeader";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What people say about me"
          sub="💫 Client Feedback Highlights"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((testimonial) => (
            <GlowCard card={testimonial}>
              <div className="flex items-center gap-3">
                <div>
                  <img
                    src={testimonial.imgPath}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full"
                  />
                </div>
              </div>
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-white-50">{testimonial.mentions}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
