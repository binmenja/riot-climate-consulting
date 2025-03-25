import React from "react";
import "/Users/benjaminriot/Documents/riot-climate-consulting/src/styles/Blog.css"; // Import CSS file
import radianceComparison from '/Users/benjaminriot/Documents/riot-climate-consulting/src/assets/Radiance_Comparison_TimeWindow_202502120331.png';

const Blog = () => {
  const posts = [
    {
      id: 1,
      date: "March 15, 2025",
      title: "Infrared trend analysis reveals strengthening of greenhouse effect in the Arctic:",
      content: (
        <>
          While analyzing the ground-based infrared radiation data from the Arctic region, we have found that the greenhouse effect is strongly strengthening due to the effects of low and thick clouds.
          <br />
          <br />
          These findings have led to the writing of a new research paper that will be published in Journal of Geophysical Research: Atmospheres. A pre-print is available at the following link:
          <br />
          <a href="https://essopenarchive.org/doi/full/10.22541/essoar.174087674.44997859/v1" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          Strengthening atmospheric greenhouse effect in the Arctic evidenced by long-term records of downwelling longwave radiance spectrum
          </a>
        </>
      )
    },
    {
      id: 2,
      date: "March 20, 2025",
      title: "WHAFFFERS Field Campaign:",
      content: (
        <>
          The WHAFFFERS Campaign (W-band, HiSRAMS, AERI, FIRR2, FINESSE, and FIRMOS Experiment on Remote Sensing) is an exciting one-month field study that took place from January 7 to February 14, 2025.
          <br />
          <br />
          This international collaboration includes multiple instrumentation groups: McGill University, Imperial College London (ICL), National Research Council Canada (NRC), NASA, Environment and Climate Change Canada (ECCC), L'Université du Québec à Montréal (UQAM), and the National Research Council of Italy (CNR).
          <br />
          <br />
          <strong>Objectives:</strong>
          <ol>
            <li>Investigating atmospheric state modeling and measurements</li>
            <li>Studying cloud signatures across mid-IR, far-IR, and microwave bands</li>
            <li>Assessing cloud property retrievals using joint (MW+IR) methods</li>
            <li>Exploring active-passive sensor synergy</li>
            <li>Evaluating snow and ice surface emissivity models</li>
          </ol>
          <br />
          A wide range of state-of-the-art instruments was deployed, including:
          <ul>
            <li> Three Atmospheric Emitted Radiance Interferometer (AERI) units from McGill University</li>
            <li> The FarINfrarEd Spectrometer for Surface Emissivity (FINESSE) from ICL</li>
            <li> The High Spectral Resolution Airborne Microwave Sounder (HiSRAMS) operated by NRC</li>
            <li> The FarInfraRed Radiometer version 2 (FIRR2) from ECCC</li>
            <li> The Far Infrared Radiation Mobile Observing System (FIRMOS) from CNR</li>
          </ul>
          <br />
          These instruments were complemented by remote sensors, in situ NRC aircraft measurements, radiosondes, and ground-based systems at McGill University's Gault site.
          <br />
          <br />
          <img src={radianceComparison} alt="Radiance Comparison" />
          <br />
          <br />
          More details can be found on the official campaign website:
          <br />
          <a href="https://whafffers.meteo.mcgill.ca/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            WHAFFFERS Campaign Website
          </a>
        </>
      )
    }
  ];

  return (
    <div className="blog-container">
      <h1 className="blog-title">Blog</h1>
      <div>
        {posts.map((post, index) => (
          <div key={post.id} className="blog-post">
            <h2 className="blog-post-title">{index + 1}. {post.title}</h2>
            <p className="blog-post-date">{post.date}</p>
            <p className="blog-post-content">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
