import { useNavigate } from "react-router-dom"

function CourseCard( { data } ) {

    const navigate = useNavigate()

    function onCourseClick(){
        navigate('/course/description', { state: {...data} })
    }

    return(
        <div onClick={onCourseClick} className="text-white w-[22rem] h-[390px] shadow-lg rounded-lg cursor-pointer group overflow-hidden bg-zinc-700">
            <div className="overflow-hidden">
                <img 
                    alt="Course thumbnail"
                    src={data?.thumbnail?.secure_url}
                    className="h-48 w-full rounded-tl-lg rounded-tr-lg group:hover:scale=[1,2] transtion-all ease-in-out duration-300"
                />
                <div className="p-3 space-y-1 text-white ">
                    <h2 className="text-xl font-bold text-yellow-500 line-clamp-2">
                        {data?.title}
                    </h2>
                    <p className="line-clamp-2 ">
                        {data?.description}
                    </p>
                    <p className="font-semibold">
                        Category: <span className="font-bold text-yellow-500">{data?.category}</span>
                    </p>
                    <p className="font-semibold">
                        Instructor: <span className="font-bold text-yellow-500">{data?.createdBy}</span>
                    </p>
                    <p className="font-semibold">
                        Total Lectures: <span className="font-bold text-yellow-500">{data?.numberOfLectures}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CourseCard