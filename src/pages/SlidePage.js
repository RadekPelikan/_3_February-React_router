import React, { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import SlideNotFound from "./presentation/SlideNotFound";

const SlidePage = () => {
  const { slideId } = useParams();

  const Slide = lazy(() =>
    import(`./presentation/Slide${slideId}`).catch((err) =>
      console.error(err)
    )
  );

  return (
    <>
      <Suspense fallback={<SlideNotFound />}>
        <Slide />
      </Suspense>
    </>
  );
};

export default SlidePage;
