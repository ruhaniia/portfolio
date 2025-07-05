import { motion } from "framer-motion";
import { personalInfo } from "../data/staticContent";

 export default function AboutPreview() {
   return (
     <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
       {/* Extra-large Circular Profile Image */}
       <motion.img
         src={personalInfo.avatar}
         alt="Profile"
-        className="
-          w-48 h-48
-          sm:w-56 sm:h-56
-          lg:w-64 lg:h-64
-          rounded-full object-cover
-          border-2 border-blue-400 shadow-lg
-          hover:scale-105 transition-transform
-        "
+        className="
+          w-[400px] h-[400px]           /* 400px square */
+          sm:w-[500px] sm:h-[500px]     /* 500px on ≥640px */
+          lg:w-[600px] lg:h-[600px]     /* 600px on ≥1024px */
+          rounded-full                 /* circle */
+          object-cover                 /* cover & center */
+          border-4 border-orange-500   /* 4px orange border */
+          shadow-2xl                   /* extra-strong shadow */
+          hover:scale-110              /* grow a bit on hover */
+          transition-transform
+        "
         initial={{ opacity: 0, x: 80 }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: false, amount: 0.5 }}
         transition={{ duration: 0.6 }}
       />
     </div>
   );
 }

      {/* Text Content Centered Vertically Beside Image */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-left max-w-2xl text-lg leading-relaxed text-gray-800 dark:text-gray-300"
      >
        <p className="mb-4">
          Hi, I'm <span className="font-semibold text-orange-500">{personalInfo.name}</span>, a{" "}
          <span className="text-orange-400">{personalInfo.role}</span>.
        </p>
        <p>
          {personalInfo.intro}{" "}
          <span className="text-orange-400 font-semibold">{personalInfo.highlighted}</span>
        </p>
      </motion.div>
    </div>
  );
}
