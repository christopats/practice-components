"use client";
import React, { useState, FC, ReactNode } from "react";
import Image from "next/image";

const Recipe = () => {
  return (
    <>
      <div className="flex justify-center align-center bg-orange-100">
        <div className=" bg-white my-24 mx-24 px-12 py-8 rounded-2xl shadow-md">
          <div>
            {" "}
            <div>
              <img
                src="practice-components/public/image-omelette.jpeg"
                alt="Omelette pic"
              />
            </div>
            <h1 className="font-serif text-3xl pb-4">Simple Omelette Recipe</h1>
            <p className="text-xs pb-4">
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables or meats
            </p>
            <div className=" bg-red-50  p-4 rounded-md mb-6">
              <h2 className="font-serif text-red-900">Preparation time</h2>
              <ul className="flex flex-col list-disc px-4 py-2 text-xs">
                <li>
                  <span className="font-bold">Total:</span> Approximately 10
                  minutes
                </li>
                <li>
                  <span className="font-bold">Preparation:</span> 5 minutes
                </li>
                <li>
                  <span className="font-bold">Cooking: </span>5 minutes
                </li>
              </ul>
            </div>
            <h2 className="font-serif text-red-900">Ingredients</h2>
            <ul className="flex flex-col list-disc px-4 py-2 text-xs">
              <li>2-3 large eggs</li>
              <li>Salt, to taste</li>
              <li>Pepper, to taste</li>
              <li>1 tablespoon of button or oil</li>
              <li>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-red-900">Instructions</h2>
            <ol className="flex flex-col list-decimal px-4 py-2 text-xs">
              <li>
                <span className="font-bold">Beat the eggs: </span>In a bowl,
                beat the eggs with a pinch of salt and pepper until they are
                well mixed. YOu can add a tablespoon of water or milk for a
                fluffier texture.
              </li>
              <li>
                <span className="font-bold">Heat the pan: </span>Place a
                non-stick trying pan over medium heat and add butter or oil.
              </li>{" "}
              <li>
                <span className="font-bold">Cook the omelette: </span>omelette:
                Once the butter is melted and bubblina, pour in the egas. I ilt
                the pan to ensure The ecos eveniy coat the surrace.
              </li>
              <li>
                <span className="font-bold">Add filling(optional): </span>When
                the eggs begin to set at the edges but are still slightly runny
                in the middle, sprinkle your chosen fillings over one half of
                the omelette.
              </li>{" "}
              <li>
                <span className="font-bold">Fold and serve: </span>As the
                omelette continues to cook, carefully lift one edge and fold it
                over the tillinas. Let it cook for another minute. then slide it
                onto a olate.
              </li>{" "}
              <li>
                <span className="font-bold">Enjoy:</span>Serve hot, with
                additional salt and pepper if needed.
              </li>
            </ol>
          </div>
          <div>
            <h2 className="font-serif text-red-900">Nutrition</h2>
            <p className="text-xs py-4">
              The table below shows nutrional values per serving without the
              additional fillings.
            </p>
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Calories
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    277kcal
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Carbs
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    0g
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Protein
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    20g
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Fat
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    22g
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
