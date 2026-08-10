import React, { useState } from 'react';
import { X, Upload, Check, Sparkles, Heart } from 'lucide-react';

export default function EditJournalModal({ data, onSave, onClose }) {
  const [formData, setFormData] = useState({ ...data });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (field, file) => {
    if (file) {
      const url = URL.createObjectURL(file);
      handleChange(field, url);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3">
      <div className="bg-[#18181c] text-white rounded-2xl max-w-lg w-full max-h-[88vh] flex flex-col shadow-2xl border border-zinc-800">

        {/* Header */}
        <div className="p-4 border-b border-zinc-800 flex justify-between items-center">
          <div className="flex items-center gap-2 text-rose-400">
            <Sparkles size={18} />
            <h2 className="font-vogue text-sm sm:text-base uppercase tracking-wider font-bold text-white">
              Персонализация журнала
            </h2>
          </div>
          <button onClick={onClose} className="text-zinc-400 hover:text-white p-1">
            <X size={20} />
          </button>
        </div>

        {/* Form Scrollable Body */}
        <form onSubmit={handleSubmit} className="p-4 space-y-4 overflow-y-auto flex-1 custom-scroll text-xs">

          {/* Main Info */}
          <div className="space-y-3 bg-zinc-900/80 p-3 rounded-xl border border-zinc-800">
            <h3 className="font-sans font-bold text-rose-400 uppercase tracking-widest text-[10px]">
              Основная информация
            </h3>

            <div>
              <label className="block text-zinc-400 mb-1 font-medium">Её Имя:</label>
              <input
                type="text"
                value={formData.girlName || ''}
                onChange={(e) => handleChange('girlName', e.target.value)}
                className="w-full bg-black/60 border border-zinc-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-rose-500 font-sans"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-zinc-400 mb-1 font-medium">Месяц и год рождения:</label>
                <input
                  type="text"
                  value={formData.birthMonthYear || ''}
                  onChange={(e) => handleChange('birthMonthYear', e.target.value)}
                  placeholder="ЯНВАРЬ 2004"
                  className="w-full bg-black/60 border border-zinc-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-rose-500 font-sans"
                />
              </div>
              <div>
                <label className="block text-zinc-400 mb-1 font-medium">Число рождения:</label>
                <input
                  type="number"
                  value={formData.birthDayNumber || 29}
                  onChange={(e) => handleChange('birthDayNumber', e.target.value)}
                  className="w-full bg-black/60 border border-zinc-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-rose-500 font-sans"
                />
              </div>
            </div>
          </div>

          {/* Cats Photos */}
          <div className="space-y-3 bg-zinc-900/80 p-3 rounded-xl border border-purple-900/40">
            <h3 className="font-sans font-bold text-purple-400 uppercase tracking-widest text-[10px]">
              🐱 Фотографии котиков (Луна и Афина)
            </h3>

            <div>
              <label className="block text-zinc-400 mb-1 font-medium">Фото кошки Луны:</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={formData.lunaPhoto || ''}
                  onChange={(e) => handleChange('lunaPhoto', e.target.value)}
                  placeholder="Ссылка на фото или загрузить"
                  className="flex-1 bg-black/60 border border-zinc-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-purple-500 font-sans text-xs"
                />
                <label className="bg-purple-900 hover:bg-purple-800 text-white px-3 py-2 rounded-lg cursor-pointer flex items-center justify-center">
                  <Upload size={14} />
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleFileUpload('lunaPhoto', e.target.files[0])}
                  />
                </label>
              </div>
            </div>

            <div>
              <label className="block text-zinc-400 mb-1 font-medium">Фото кошки Афины:</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={formData.athenaPhoto || ''}
                  onChange={(e) => handleChange('athenaPhoto', e.target.value)}
                  placeholder="Ссылка на фото или загрузить"
                  className="flex-1 bg-black/60 border border-zinc-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-purple-500 font-sans text-xs"
                />
                <label className="bg-purple-900 hover:bg-purple-800 text-white px-3 py-2 rounded-lg cursor-pointer flex items-center justify-center">
                  <Upload size={14} />
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleFileUpload('athenaPhoto', e.target.files[0])}
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Key Photos */}
          <div className="space-y-3 bg-zinc-900/80 p-3 rounded-xl border border-zinc-800">
            <h3 className="font-sans font-bold text-rose-400 uppercase tracking-widest text-[10px]">
              Загрузка фотографий Катюши
            </h3>

            <div>
              <label className="block text-zinc-400 mb-1 font-medium">Фото на Обложку:</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={formData.coverPhoto || ''}
                  onChange={(e) => handleChange('coverPhoto', e.target.value)}
                  className="flex-1 bg-black/60 border border-zinc-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-rose-500 font-sans text-xs"
                />
                <label className="bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-2 rounded-lg cursor-pointer flex items-center justify-center">
                  <Upload size={14} />
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleFileUpload('coverPhoto', e.target.files[0])}
                  />
                </label>
              </div>
            </div>

            <div>
              <label className="block text-zinc-400 mb-1 font-medium">Фото для статьи "Кто наше Солнышко?":</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={formData.mainPhoto || ''}
                  onChange={(e) => handleChange('mainPhoto', e.target.value)}
                  className="flex-1 bg-black/60 border border-zinc-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-rose-500 font-sans text-xs"
                />
                <label className="bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-2 rounded-lg cursor-pointer flex items-center justify-center">
                  <Upload size={14} />
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleFileUpload('mainPhoto', e.target.files[0])}
                  />
                </label>
              </div>
            </div>

          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-colors"
          >
            <Check size={16} />
            <span>Применить все изменения</span>
          </button>
        </form>

      </div>
    </div>
  );
}
