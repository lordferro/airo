import "./RecepieList.css";
import { useCallback, useEffect, useRef } from "react";
import { useRecepieStore } from "../../hooks/zustand";
import { shallow } from "zustand/shallow";
import { Recepie } from "../recepie/Recepie";

const RecepieList = () => {
  const {
    recepies,
    page,
    checked,
    fetch,
    startIndex,
    endIndex,
    increaseIndex,
    increasePage,
  } = useRecepieStore(
    (state) => ({
      recepies: state.recepies,
      checked: state.checked,
      page: state.page,
      startIndex: state.startIndex,
      endIndex: state.endIndex,
      increaseIndex: state.increaseIndex,
      fetch: state.fetch,
      increasePage: state.increasePage,
    }),
    shallow
  );

  const containerRef = useRef(null);
  const listRef = useRef(null);

  const toggleChecked = useCallback(
    (id) => {
      if (checked.indexOf(id) < 0) {
        useRecepieStore.setState({ checked: [...checked, id] });
      } else {
        const updatedChecked = checked.filter((checkedId) => {
          return checkedId !== id;
        });
        useRecepieStore.setState({ checked: updatedChecked });
      }
    },
    [checked]
  );

  const handleObserver = (entries) => {
    if (entries[0].intersectionRatio <= 0) return;
    const target = entries[0];
    if (target.boundingClientRect.y > 350 && target.isIntersecting) {
      increaseIndex();
    }
  };

  const isChecked = (id) => {
    return checked.includes(id);
  };

  const handlerDelete = () => {
    const newRecepies = recepies.filter(
      (recepie) => !checked.includes(recepie.id)
    );
    useRecepieStore.setState({ recepies: newRecepies });

    useRecepieStore.setState({ checked: [] });
  };

  useEffect(() => {
    fetch();
    const options = {
      root: null,
      rootMargin: "15px",
      threshold: 1.0,
    };

    const currentContainer = containerRef.current;

    const observer = new IntersectionObserver(handleObserver, options);
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    const handlerListItemClick = (e) => {
      if (e.button === 2) {
        if (e.target && e.target.closest("li")) {
          const liId = Number(e.target.closest("li[id]").getAttribute("id"));
          toggleChecked(liId);
        }
      }
    };

    const currentLi = listRef.current;

    if (listRef.current) {
      currentLi.addEventListener("mousedown", handlerListItemClick);
    }

    return () => {
      currentLi.removeEventListener("mousedown", handlerListItemClick);
    };
  }, [toggleChecked]);

  useEffect(() => {
    if (recepies.length > 0 && recepies.length <= endIndex) {
      increasePage();
    }
  }, [endIndex, increasePage, recepies.length]);

  return (
    <>
      <ul ref={listRef}>
        {recepies &&
          recepies.slice(startIndex, endIndex).map((recepie) => (
            <li
              onContextMenu={(e) => {
                e.preventDefault();
              }}
              key={recepie.id}
              id={recepie.id}
            >
              <Recepie recepie={recepie} checked={isChecked(recepie.id)} />
            </li>
          ))}
      </ul>
      {checked.length > 0 && (
        <div className="control">
          <button className="controlBtn delete" onClick={handlerDelete}>
            delete
          </button>
          <button
            className="controlBtn deselect"
            onClick={() => {
              useRecepieStore.setState({ checked: [] });
            }}
          >
            deselect all
          </button>
        </div>
      )}
      <div ref={containerRef} />
    </>
  );
};

export default RecepieList;
