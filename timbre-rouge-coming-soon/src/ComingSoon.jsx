
import React from "react";

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-serif flex flex-col items-center justify-center text-center px-6">
      <img
        src="/logo-timbre-rouge.png"
        alt="Timbre Rouge Logo"
        className="h-28 mb-8"
      />
      <h1 className="text-4xl md:text-6xl text-red-900 italic font-light mb-6">
        Une élégance se prépare…
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mb-10">
        Notre univers s'apprête à se dévoiler. Bientôt, une collection chic et raffinée viendra habiller vos silhouettes de caractère. Soyez les premiers à découvrir la signature <strong>Timbre Rouge</strong>.
      </p>
      <form className="w-full max-w-md mb-10">
        <label htmlFor="email" className="block text-sm font-light mb-2">
          Inscrivez-vous pour recevoir une notification dès le lancement :
        </label>
        <div className="flex">
          <input
            type="email"
            id="email"
            placeholder="Votre adresse e-mail"
            className="flex-1 p-3 border border-neutral-300 rounded-l-full focus:outline-none"
          />
          <button
            type="submit"
            className="bg-red-900 text-white px-6 py-3 rounded-r-full hover:bg-red-800 transition"
          >
            M'inscrire
          </button>
        </div>
      </form>
      <div className="text-sm text-neutral-500">
        <p>Ouverture officielle très prochainement.</p>
        <p>Suivez-nous sur Instagram pour ne rien manquer.</p>
      </div>
    </div>
  );
}
