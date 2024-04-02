import { Routes, Route } from "react-router-dom";
import { memo } from "react";
import Error from "../views/Error";
import Index from "../views/Index";

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Index />} />
      <Route path="/fashion" element={<Index />} />
      <Route path="/accessory" element={<Index />} />
      <Route path="/digital" element={<Index />} />
    </Routes>
  );
};

export default memo(Router);
