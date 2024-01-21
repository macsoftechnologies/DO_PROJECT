import { BrowserRouter, Routes, Route } from "react-router-dom";
import Observability from "./products/Observability";
import Datasense from "./products/Datasense";
import Datacharts from "./products/Datacharts";
import Domonitor from "./products/Domonitor";
import Doprompt from "./products/Doprompt";
import Home from "./Home/Home";
import Company from "./pages/Company";
import People from "./pages/People";
import Contact from "./pages/Contact";
import Cloud from "./expertise/Cloud";
import Talent from "./expertise/Talent";
import Aiml from "./expertise/Aiml";
import Devops from "./expertise/Devops";
import Application from "./expertise/Application";
import Databi from "./expertise/Databi";
import Dataeng from "./expertise/Dataeng";
import Industries from "./Industries/Industries";
import Gaming from "./Industries/Gaming";
import Media from "./Industries/Media";
import BlogsRedirect from "./redirectpages/BlogsRedirect";
import CasestudiesRedirect from "./redirectpages/CasestudiesRedirect";
import Ebooks from "./Ebooks/Ebooks";
import Genai from "./expertise/Genai";
import Allinsights from "./Insights/Allinsights";
import ProductLanding from "./Landingpages/ProductLanding";
import Indredirect from "./Landingpages/Indredirect";
import Expredirect from "./Landingpages/Expredirect"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/people" element={<People />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/observability" element={<Observability />} />
          <Route path="/datainsights" element={<Datasense />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/databi" element={<Databi />} />
          <Route path="/devops" element={<Devops />} />
          <Route path="/talent" element={<Talent />} />
          <Route path="/application" element={<Application />} />
          <Route path="/aiml" element={<Aiml />} />
          <Route path="/dataeng" element={<Dataeng />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/media" element={<Media />} />
          <Route path="/blog/:id" element={<BlogsRedirect />} />
          <Route path="/casestudies" element={<CasestudiesRedirect />} />
          <Route path="/ebooks" element={<Ebooks />} />
          <Route path="/genai" element={<Genai />} />
          <Route path="/allinsights" element={<Allinsights />} />
          <Route path="/datacharts" element={<Datacharts />} />
          <Route path="/datamonitor" element={<Domonitor />} />
          <Route path="/dataprompt" element={<Doprompt />} />
          <Route path="/productlanding" element={<ProductLanding/>} />
          <Route path="/industrielanding" element={<Indredirect/>} />
          <Route path="/expertiselanding" element={<Expredirect/>} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
