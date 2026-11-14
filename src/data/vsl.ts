// Jared's owner video (2:29). Hosted on YouTube (unlisted), embedded through a
// click-to-load facade so it costs nothing until a visitor presses play.
// The transcript is the actual recorded audio (transcribed 2026-11-13), lightly
// punctuated; keep it verbatim if the video is re-cut, since it is what search
// engines and AI answer engines read in place of the video.

export const VSL = {
  youtubeId: "Un2D1aNXD2s",
  title: "Meet Blue Logic: A Message From Co-Owner Jared",
  description:
    "Jared, one of the owners of Blue Logic, explains how the company approaches water treatment: education before sales, a free water test at your home, and a system sized to your water, from a softener to reverse osmosis at every tap.",
  uploadDate: "2026-08-10",
  durationIso: "PT2M29S",
  durationLabel: "2:29",
};

export const VSL_TRANSCRIPT: string[] = [
  "Hi, my name's Jared. I'm one of the owners of Blue Logic. We are a locally owned water filtration and purification company located right here in Utah.",
  "If you're seeing this video, you're more than likely curious or concerned with what's actually going on in your home's water. You might be looking at us for health reasons, home longevity, or because your skin and your hair don't feel quite as good as they did at your old place. Maybe you're curious about our process because you've sat through a sales presentation, but you're still wondering what really happens when it comes to purifying water. This video is for you.",
  "The water industry is a different game. There's a lot of pushy salesmen and misinformation when it comes down to what you're actually buying and putting into your home. Some companies will try to sell you a whole home purification system when unfortunately it's more like filtration with only resin and carbon. It's typically not a system that actually purifies and removes arsenic, heavy metals, chlorine, PFOS and other harmful toxins out of the water.",
  "With us, we do things differently. Instead of pushing sales, we push education first. Our goal with every in-home water test is to educate you on what's actually happening with your water. We will pull local reports showing specifically what's going on in your home's tap water. We test the hardness and we also test the TDS, which reveals just how contaminated your water is.",
  "Every system is different, and it's not just a one-size-fits-all for your home. Our goal is to find the right solution specific for you. If you're just concerned with hard water spots throughout the home and just need a softener, we can do that for you. Or if you're looking to completely remove all toxins and have reverse osmosis water to every tap, we have solutions for that also.",
  "Plus, our systems are custom built. Every part is hand selected to ensure quality, engineered to be quieter, more efficient and longer lasting by being built in house right here in Utah. The system you'll get installed in your home is the same system I have installed in my home for my family.",
  "If you're looking into water filtration or purification systems, we want to be your guys. If you schedule an appointment with us, I'm extremely excited to meet you. It'll either be me or another trusted member of our team showing up to your door. Thank you so much for watching this video. If you have any other questions about our meeting, our process, or just about the toxins that might be in your water, please feel free to reach out to us. Thank you, and we look forward to helping you with your home's water filtration and purification needs.",
];

export function getVslSchema(pageUrl: string, thumbnailUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: VSL.title,
    description: VSL.description,
    thumbnailUrl: [thumbnailUrl],
    uploadDate: VSL.uploadDate,
    duration: VSL.durationIso,
    embedUrl: `https://www.youtube-nocookie.com/embed/${VSL.youtubeId}`,
    url: pageUrl,
    publisher: {
      "@type": "Organization",
      name: "Blue Logic Water",
      url: "https://www.bluelogicwater.com/",
    },
  };
}
