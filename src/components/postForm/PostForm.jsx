import React, { useCallback } from "react";
import { useEffect } from "react";
import { Controller, set, useForm } from "react-hook-form";
import service from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import RTE from "../RTE";
function PostForm({ post }) {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
    setValue,
    control,
    getValues,
  } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.$id || "",
      content: post?.content || "",
      status: post?.status || "active",
    },
  });

  useEffect(() => {
    if (post) {
      setValue("title", post.title);
      setValue("slug", post.$id);
      setValue("content", post.content);
      setValue("status", post.status);
    }
  }, [post, setValue]);

  const addPostHandle = async (data) => {
    if (post) {
      const file = data.image[0]
        ? await service.uploadFile(data.image[0])
        : null;
      if (file) {
        await service.deleteFile(post.featuredImage);
      }

      const dbPost = await service.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await service.uploadFile(data.image[0]);
      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await service.createPost({
          ...data,
          userId: userData.$id,
        });
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      } else {
        alert("image not found");
      }
    }
  };

  const slugTransformation = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");
    }
    return "";
  }, []);

  const titleChange = watch("title");

  useEffect(() => {
    if (!post) {
      setValue("slug", slugTransformation(titleChange), {
        shouldValidate: true,
      });
    }
  }, [titleChange, slugTransformation, post]);
  return (
    <div className="py-10">
      <form onSubmit={handleSubmit(addPostHandle)}>
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="col-span-3 p-3">
            <div className="py-2 flex flex-col ">
              <label className="font-semibold">Title</label>
              <input
                className="py-2 my-2 w-full border border-gray-200 bg-white rounded-lg"
                type="text"
                {...register("title", {
                  required: "Title is Required",
                })}
              />
            </div>

            <div className="py-2 flex flex-col ">
              <label className="font-semibold">Slug</label>
              <input
                className="py-2 my-2 w-full border border-gray-200 bg-white rounded-lg"
                type="text"
                {...register("slug", {
                  required: "slug is Required",
                })}
              />
            </div>
            <div className="py-2 flex flex-col ">
              <RTE
                label="Content"
                name="content"
                control={control}
                defaultValue={getValues("content")}
              />
              {/* <label className="font-semibold">Content</label>
              <textarea
                {...register("content", {
                  required: "Content is Required",
                })}
                className="py-2 my-2 h-[100px] w-full border border-gray-200 bg-white rounded-lg"
              ></textarea> */}
            </div>
          </div>

          <div className="col-span-2 p-3">
            <div className="py-2 flex flex-col ">
              <label className="font-semibold">Image</label>
              <input
                className="py-2 my-2 w-full border border-gray-200 bg-white rounded-lg"
                type="file"
                accept="image/png, image/jpg, image/jpeg, image/gif"
                {...register("image", {
                  required: !post,
                })}
              />
            </div>
            {post && (
              <div className="w-full mb-4">
                <img
                  src={service.getFileView(post.featuredImage)}
                  alt={post.title}
                  className="rounded-lg w-[100px]"
                />
              </div>
            )}
            <div className="py-2 flex flex-col ">
              <label className="font-semibold">Status</label>
              <select
                className="py-2 my-2 w-full border border-gray-200 bg-white rounded-lg"
                {...register("status", { required: true })}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PostForm;
