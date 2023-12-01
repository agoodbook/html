import { useEffect, useState } from "react";
import { message, Tooltip } from "antd";
import { getRandomPoetry } from "@site/src/apis";

export default function Poetry() {
  const [messageApi, contextHolder] = message.useMessage();
  const [isShowName, setIsShowName] = useState(false);
  const [info, setInfo] = useState({ poetry: "", name: "" });

  function handleRandomPoetry() {
    getRandomPoetry()
      .then((data) => {
        if (!data.poetry) {
          return handleRandomPoetry();
        }

        setInfo(data);
        sessionStorage.setItem(
          "footer-word",
          JSON.stringify({ ...data, updateAt: Date.now() }),
        );
      })
      .catch(async () => {
        await messageApi.error("无法正确获取诗句");
      });
  }

  function handleIsRefreshPoetry() {
    const item = sessionStorage.getItem("footer-word");
    if (!item) {
      return handleRandomPoetry();
    }

    const { poetry, name, updateAt } = JSON.parse(item);
    if (!poetry || Date.now() - updateAt >= 1000 * 60 * 10) {
      return handleRandomPoetry();
    }
    return setInfo({ poetry, name });
  }

  function handleCopyHitokoto() {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(info.poetry).then(async () => {
        await messageApi.success("复制成功");
      });
    }
  }

  useEffect(() => {
    handleIsRefreshPoetry();
  }, []);

  return (
    <>
      {info.poetry ? (
        <div className="custom-footer">
          {contextHolder}
          <Tooltip color="#2db7f5" placement="top" title="点击复制">
            <span
              onMouseEnter={() => setIsShowName(true)}
              onMouseLeave={() => setIsShowName(false)}
              className="hitokoto"
              onClick={handleCopyHitokoto}
            >
              「 {info.poetry}」
            </span>
          </Tooltip>

          <div
            style={{
              opacity: isShowName ? 1 : 0,
              paddingTop: "60px",
            }}
            className="from"
          >
            {info.name || "来源网络"}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
