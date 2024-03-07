/**
 * @vitest-environment jsdom
 */

import { describe, it } from 'vitest';

import { render, screen } from '@testing-library/react';

import { Bucket } from '../components/bucket';
import { capitalizeFirstLetter } from '../components/capitalizeFirstLetter';

const test_config = {
  "APIPORT": 1234,
  "LCCOLLECTION": "test",
  "ITEM_NAME": "test_item_name",
  "ITEM_LABEL": "test_item_label",
  "BUCKET_NAME": "test_bucket",
  "BUCKETS":
  [
    {
      "NAME": "first",
      "PREFIX": "f",
      "IFIRST": 1,
      "ILAST": 10
    },
    {
      "NAME": "second",
      "PREFIX": "s",
      "IFIRST": 11,
      "ILAST": 15
    }
  ]
}

/* eslint-disable */
const null_setter = () => {};
/* eslint-enable */

const renderBucket = (bucket = 0) => {
  return render(<Bucket config={test_config} bucket={bucket} set_bucket={null_setter} />);
}

describe('label test', () => {
  it("should contain a bucket label div element", async () => {
    renderBucket();

    const BucketLabelDiv = screen.queryByTestId("bucket_label_div");
    expect(BucketLabelDiv).toBeInTheDocument();
  });

  it("should contain a bucket label label element", async () => {
    renderBucket();

    const BucketLabelLabel = screen.queryByTestId("bucket_label_label");
    expect(BucketLabelLabel).toBeInTheDocument();
  });

  it("bucket label label element should have the correct value", async () => {
    renderBucket();

    const BucketLabelLabel = screen.queryByTestId("bucket_label_label");
    expect(BucketLabelLabel).toHaveTextContent("Test_bucket");
  });
});

describe('capitalise first letter test', () => {
  it("should return undefined for no input", async () => {
    const cfl_null = capitalizeFirstLetter();
    expect(cfl_null).toBeUndefined;
  });
  it("should return Apple for input of apple", async () => {
    const cfl_apple = capitalizeFirstLetter("apple");
    expect(cfl_apple).toBe("Apple");
  });
  it("should return APPLE for input of APPLE", async () => {
    const cfl_apple = capitalizeFirstLetter("APPLE");
    expect(cfl_apple).toBe("APPLE");
  });
});

describe('buckets test', () => {
  it("should contain a checked button", async () => {
    renderBucket();

    const BucketButtonChecked = screen.queryByTestId("bucket_button_checked");
    expect(BucketButtonChecked).toBeInTheDocument();
  });

  it("should contain a checked button label", async () => {
    renderBucket(1);

    const BucketButtonChecked = screen.queryByTestId("bucket_button_checked_label");
    expect(BucketButtonChecked).toBeInTheDocument();
  });

  it("default checked button label should be correct value", async () => {
    renderBucket();

    const BucketButtonCheckedLabel = screen.queryByTestId("bucket_button_checked_label");
    expect(BucketButtonCheckedLabel).toHaveTextContent("First");
  });

  it("checked button label should be correct value", async () => {
    renderBucket(1);

    const BucketButtonCheckedLabel = screen.queryByTestId("bucket_button_checked_label");
    expect(BucketButtonCheckedLabel).toHaveTextContent("Second");
  });

  it("should contain an unchecked button", async () => {
    renderBucket(1);

    const BucketButtonUnchecked = screen.queryByTestId("bucket_button_unchecked");
    expect(BucketButtonUnchecked).toBeInTheDocument();
  });

  it("should contain an unchecked button label", async () => {
    renderBucket(1);

    const BucketButtonUncheckedLabel = screen.queryByTestId("bucket_button_unchecked_label");
    expect(BucketButtonUncheckedLabel).toBeInTheDocument();
  });

  it("default unchecked button label should be correct value", async () => {
    renderBucket();

    const BucketButtonUncheckedLabel = screen.queryByTestId("bucket_button_unchecked_label");
    expect(BucketButtonUncheckedLabel).toHaveTextContent("Second");
  });

  it("unchecked button label should be correct value", async () => {
    renderBucket(1);

    const BucketButtonUncheckedLabel = screen.queryByTestId("bucket_button_unchecked_label");
    expect(BucketButtonUncheckedLabel).toHaveTextContent("First");
  });
});
