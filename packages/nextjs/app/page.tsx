"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { FlagIcon, CurrencyDollarIcon, RocketLaunchIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5 text-center">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white py-12 px-8 rounded-3xl shadow-2xl mb-12 animate-fade-in">
            <h1 className="text-center mb-8">
              <span className="block text-4xl mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-white">
                🦅 Make Crypto Great Again 🦅
              </span>
              <span className="block text-5xl font-bold mb-4">WORLD CAPITAL</span>
              <span className="block text-3xl bg-white text-blue-600 px-4 py-2 rounded-full inline-block">
                $WCL Token
              </span>
            </h1>
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-white/20 p-4 rounded-xl">
                <Address address={connectedAddress} />
              </div>
              <div className="flex space-x-4">
                <Link href="/pool/create" className="btn btn-lg btn-primary animate-bounce">
                  <RocketLaunchIcon className="h-6 w-6 mr-2" />
                  Add Liquidity
                </Link>
                <Link href="/debug" className="btn btn-lg btn-secondary">
                  <ShieldCheckIcon className="h-6 w-6 mr-2" />
                  Verify Holdings
                </Link>
              </div>
            </div>
          </div>

          {/* Value Proposition Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-blue-600">Why $WCL?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-blue-600 transform hover:scale-105 transition-all">
                <FlagIcon className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">America-First Crypto</h3>
                <p className="text-gray-600">Secure, stable digital currency backed by American values</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-blue-600 transform hover:scale-105 transition-all">
                <ShieldCheckIcon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Fort Knox Security</h3>
                <p className="text-gray-600">Military-grade blockchain protection for your assets</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-blue-600 transform hover:scale-105 transition-all">
                <CurrencyDollarIcon className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Economic Dominance</h3>
                <p className="text-gray-600">Driving global crypto adoption through American innovation</p>
              </div>
            </div>
          </div>

          {/* Liquidity Call-to-Action */}
          <div className="bg-red-600 text-white p-8 rounded-3xl mb-12 shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Build the Wall of Liquidity</h2>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <p className="text-xl max-w-xl text-center">
                Join thousands of patriots securing our financial future. Add liquidity and help make $WCL the
                <span className="font-bold">#1 Crypto in the World</span>
              </p>
              <Link href="/pool/create" className="btn btn-lg btn-warning animate-pulse">
                🚀 Add Liquidity Now
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="text-sm text-gray-500 max-w-2xl mx-auto">
            * $WCL is the official cryptocurrency of American financial sovereignty. All transactions are final.
            <br />
            🇺🇸 Proudly developed in the USA 🇺🇸
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
