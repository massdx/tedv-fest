import { motion } from "framer-motion"
export const Date = () => {
    return <>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
         className="rounded-full  bg-gradient-to-l to-red-500 to-30% from-pink-600 w-fit flex gap-1 md:gap-3 p-1 md:p-2 text-sm mb-2 items-center font-semibold">
            <motion.span >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

            </motion.span>
            <span className="uppercase ">
                25 au 26 Août 2023
            </span>
        </motion.div>
    </>
}