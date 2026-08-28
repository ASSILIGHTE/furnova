import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { SITE_CONFIG } from '../config/siteConfig';

export const InstagramGallery: React.FC = () => {
  const instaPosts = [
    { id: 1, image: '/images/hero_interior.png', likes: '1.4k', comments: '48' },
    { id: 2, image: '/images/oslo_lounge_chair.png', likes: '2.1k', comments: '89' },
    { id: 3, image: '/images/nordic_dining_table.png', likes: '980', comments: '32' },
    { id: 4, image: '/images/verona_sofa.png', likes: '3.2k', comments: '124' },
    { id: 5, image: '/images/oakline_cabinet.png', likes: '1.8k', comments: '64' },
    { id: 6, image: '/images/haven_bed_frame.png', likes: '2.5k', comments: '95' },
  ];

  return (
    <section className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C5A059]">Galeri Visual</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C1E16] mt-1">
              Follow Our Work
            </h2>
            <p className="text-xs text-stone-500 font-light mt-1">
              Dapatkan inspirasi penataan interior & pembaharuan koleksi terbaru di Instagram {SITE_CONFIG.instagram}
            </p>
          </div>

          <a
            href={SITE_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 bg-[#2C1E16] hover:bg-[#C5A059] text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-full transition-all shadow-md"
          >
            <InstagramIcon className="w-4 h-4 text-[#C5A059]" />
            <span>Follow {SITE_CONFIG.instagram}</span>
          </a>
        </div>


        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {instaPosts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ scale: 1.03 }}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer shadow-sm border border-[#EFE8DF]"
            >
              <img
                src={post.image}
                alt={`FURNOVA Instagram ${post.id}`}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-white text-xs font-bold">
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4 fill-white" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{post.comments}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
