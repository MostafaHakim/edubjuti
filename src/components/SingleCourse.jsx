import { useParams } from "react-router-dom";
import datas from "./data.js"


const SingleCourse = () => {

    const courseId = useParams();
    const course = datas.find((data) => data.id === courseId.id);
    return (
        <>
            <div className="w-full">
                <div className="flex flex-row justify-between p-4">
                    <img className="w-1/2" src={course.img} alt="img" />
                    <div className="w-1/2 p-4">
                        <h2 className="text-3xl font-roboto text-left pb-2">{course.name}</h2>
                        <p className="font-roboto pb-2">{course.techer}</p>
                        <p className="text-justify font-poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et excepturi maiores, autem nemo laboriosam ipsum nostrum eaque architecto eum fuga. Atque nesciunt nisi ex. Minus sapiente consectetur dicta quaerat amet suscipit ex harum repellendus! Ex velit porro accusamus cupiditate, exercitationem at veritatis optio nesciunt maiores. Dolor delectus iusto ut enim assumenda laboriosam nemo ex sit, quis tempora? Nulla autem numquam dolorum earum ad esse possimus assumenda quibusdam excepturi placeat, dolorem magnam fugit aut officia, perferendis neque accusantium? Minus dignissimos earum nostrum, dolorum mollitia blanditiis voluptatem molestiae, minima corrupti modi repudiandae, tenetur maiores omnis numquam voluptates perferendis enim cumque error quas! Totam magni sint voluptate inventore veritatis quidem, ratione beatae. Quasi expedita officia natus consectetur, totam neque eum optio repellat vel eius odio ut ex doloremque quae quisquam deleniti, ullam laudantium, culpa voluptatum magnam aut eveniet hic vero? Quaerat voluptatum nemo, inventore vitae sapiente vero tenetur dicta quos minima illo. Sapiente!</p>
                    </div>
                </div>
                <div>
                    <p className="px-8 py-2 text-justify font-poppins">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, modi rerum. Vel doloremque consectetur, quasi illo amet velit nesciunt sapiente, ab saepe sequi accusantium ad maiores exercitationem deleniti iusto dicta autem dolorem! Exercitationem repudiandae libero ipsum! Perspiciatis voluptate iste, dolores consequuntur accusantium possimus earum sequi cumque asperiores pariatur explicabo maxime, tempora placeat quibusdam animi odio harum aliquam deleniti reiciendis nam eum ullam neque a dolor. Ullam excepturi tempora harum in quidem incidunt similique laboriosam magnam obcaecati eaque, quas asperiores. Voluptatibus enim consectetur dolores exercitationem eius minus deserunt voluptate ipsum vitae laudantium harum esse praesentium corrupti quo temporibus, accusamus itaque dolore reprehenderit commodi. Voluptate quidem reprehenderit labore saepe laboriosam, eius eligendi minus doloribus distinctio officiis beatae eum eveniet qui nesciunt, asperiores optio? Illum veniam voluptate quos dignissimos quasi natus ullam doloribus magni, architecto molestiae officiis saepe, cumque a temporibus vero quisquam dolorem? Tenetur sequi accusamus aut animi perspiciatis! Natus eaque veritatis nobis rem laboriosam, non exercitationem maiores autem aspernatur fugiat fuga dolores perferendis expedita similique illum laudantium, quibusdam pariatur deleniti soluta molestiae quam ratione voluptatibus. Quam, minus dignissimos fugiat ab voluptatibus ducimus a cumque, eos nam et mollitia velit aspernatur aliquam inventore? Reprehenderit enim quasi expedita accusamus! Delectus incidunt earum aspernatur.</p>
                </div>
            </div>
        </>

    );
}

export default SingleCourse;