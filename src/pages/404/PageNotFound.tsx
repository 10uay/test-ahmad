import FuzzyText from "@/components/bits/TextAnimations/FuzzyText/FuzzyText";

export default function PageNotFound() {
  return (
    <div className="bg-black mt-40 p-4 flex flex-col sm:max-w-[600px] max-w-[220px] container mx-auto">
      <FuzzyText
        baseIntensity={0.1}
        className="pb-4">
        404
      </FuzzyText>

      <FuzzyText className="">
        page not found
      </FuzzyText>

    </div>
  )
}

