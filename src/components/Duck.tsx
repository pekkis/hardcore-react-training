import { DuckType } from "@/services/duck";
import styles from "./Duck.module.css";
import Link from "next/link";

type Props = {
  duck: DuckType;
};

export default function Duck({ duck }: Props) {
  return (
    <div className={styles.duck}>
      <div>
        <Link href={`/duck/${duck.id}`}>
          <strong>{duck.lastName}</strong>, {duck.firstName}
        </Link>
      </div>
    </div>
  );
}
